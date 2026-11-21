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

if ($Document -eq 'Interview') {
    foreach ($field in @('company', 'position')) {
        if ($data.application.$field -isnot [string] -or
            [string]::IsNullOrWhiteSpace($data.application.$field)) {
            throw "Interview requires a nonempty application.$field."
        }
    }
}

if ($ValidateOnly) {
    Write-Output 'Input JSON passed the basic checks.'
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
