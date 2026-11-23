[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [ValidateSet('Resume', 'WorkHistory', 'Interview')]
    [string]$Document,

    [Parameter(Mandatory)]
    [string]$InputFile,

    [string]$OutputDirectory,
    [string]$PythonPath = 'python',
    [string]$GeneratorDirectory = (Join-Path $HOME '.codex/scripts'),
    [switch]$ValidateOnly
)

$ErrorActionPreference = 'Stop'

$inputPath = (Get-Item -LiteralPath $InputFile).FullName
try {
    $raw = Get-Content -LiteralPath $inputPath -Raw -Encoding UTF8
    if ($raw -notmatch '^\s*\{') {
        throw 'The JSON root must be an object.'
    }
    $data = ConvertFrom-Json -InputObject $raw -ErrorAction Stop
} catch {
    throw "Invalid input JSON: $($_.Exception.Message)"
}

foreach ($field in @('person', 'application')) {
    $property = $data.PSObject.Properties[$field]
    if ($null -ne $property -and $property.Value -isnot [pscustomobject]) {
        throw "The '$field' field must be an object."
    }
}

function Test-ConfirmedText {
    param($Value)

    return ($Value -is [string] -and
        -not [string]::IsNullOrWhiteSpace($Value) -and
        $Value.Trim() -notmatch '^(要確認|未確認|未定|未入力|未指定|不明|TBD|TODO|[-－—]+)$')
}

$missing = [System.Collections.Generic.List[string]]::new()

function Add-MissingFields {
    param($Record, [string]$Path, [string[]]$Fields)

    foreach ($field in $Fields) {
        if (-not (Test-ConfirmedText $Record.$field)) {
            $missing.Add("$Path.$field")
        }
    }
}

function Add-MissingRows {
    param([string]$Path, [string[]]$Fields, [switch]$Required)

    $rows = @($data.$Path | Where-Object { $null -ne $_ })
    if ($Required -and $rows.Count -eq 0) {
        $missing.Add($Path)
    }
    for ($index = 0; $index -lt $rows.Count; $index++) {
        Add-MissingFields $rows[$index] "$Path[$index]" $Fields
    }
}

Add-MissingFields $data.person 'person' @('name', 'self_pr')
switch ($Document) {
    'Resume' {
        Add-MissingFields $data.person 'person' @('furigana', 'birth_date', 'address', 'phone', 'email')
        Add-MissingRows 'education' @('period', 'school', 'detail') -Required
        Add-MissingRows 'employment' @('period', 'company', 'detail') -Required
        Add-MissingRows 'qualifications' @('period', 'name')
    }
    'WorkHistory' {
        Add-MissingFields $data.person 'person' @('summary')
        Add-MissingRows 'career' @('company', 'period', 'employment_type', 'department', 'role', 'duties', 'actions', 'results', 'business_overview') -Required
        Add-MissingRows 'qualifications' @('period', 'name')
    }
    'Interview' {
        Add-MissingFields $data.person 'person' @('career_change_reason')
        Add-MissingFields $data.application 'application' @(
            'company', 'position', 'business_overview', 'job_description',
            'requirements', 'fit', 'gaps', 'motivation', 'self_introduction', 'interview_notes'
        )
        Add-MissingRows 'interview_qa' @('question', 'answer') -Required
        Add-MissingRows 'deep_dive_qa' @('question', 'answer') -Required
        if (@($data.questions_for_interviewer | Where-Object { Test-ConfirmedText $_ }).Count -eq 0) {
            $missing.Add('questions_for_interviewer')
        }
    }
}

if (@($data.information_to_confirm | Where-Object { -not [string]::IsNullOrWhiteSpace($_) }).Count -gt 0) {
    $missing.Add('information_to_confirm')
}

if ($missing.Count -gt 0) {
    throw ("Document generation is blocked. Confirm these fields before proceeding: " + ($missing -join ', '))
}

if ($ValidateOnly) {
    Write-Output 'Input JSON passed the required-field checks.'
    return
}

$generator = @{
    Resume = 'generate_resume.py'
    WorkHistory = 'generate_work_history.py'
    Interview = 'generate_interview.py'
}
$module = @{
    Resume = 'artifact_tool'
    WorkHistory = 'artifact_tool'
    Interview = 'docx'
}

$scriptPath = (Get-Item -LiteralPath (Join-Path $GeneratorDirectory $generator[$Document])).FullName
$python = (Get-Command $PythonPath -CommandType Application).Source
if (-not $OutputDirectory) {
    $projectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
    $OutputDirectory = Join-Path $projectRoot 'docs/deliverables'
}
$outputPath = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($OutputDirectory)

& $python -B -c "import $($module[$Document])"
if ($LASTEXITCODE -ne 0) {
    throw "The selected Python could not import $($module[$Document])."
}

& $python -B $scriptPath --input $inputPath --output $outputPath
if ($LASTEXITCODE -ne 0) {
    throw "Document generator exited with code $LASTEXITCODE."
}
