# 就活資料生成ツール

Windows PowerShell から、就活データの入力確認と書類生成を行います。生成には既存の Codex 用 Python スクリプトを使います。

| 場所 | 用途 |
| --- | --- |
| `docs/documents/` | 元資料と、必要に応じて保存した入力 JSON |
| `docs/deliverables/` | 生成した書類の既定の保存先 |
| `~/.codex/data/job_data.template.json` | 入力 JSON のひな型 |
| `~/.codex/scripts/` | 既存の書類生成スクリプト |

ひな型を任意の場所にコピーし、確認できた本人情報と応募先情報を入力します。履歴書と職務経歴書は同じ JSON を使えます。面接対応資料では `application.company` と `application.position` を入力します。

まず入力の基本項目を確認できます。この実行では書類を生成しません。

```powershell
.\.agents\scripts\Generate-JobDocuments.ps1 -Document Resume -InputFile .\docs\documents\job-data.json -ValidateOnly
```

書類を生成する場合は `-ValidateOnly` を外します。

PowerShell の既定の実行ポリシーでローカルスクリプトが無効な場合は、上の確認を次のコマンドで実行できます。設定はそのプロセス内でのみ有効です。

```powershell
powershell.exe -NoProfile -ExecutionPolicy RemoteSigned -File .\.agents\scripts\Generate-JobDocuments.ps1 -Document Resume -InputFile .\docs\documents\job-data.json -ValidateOnly
```

```powershell
.\.agents\scripts\Generate-JobDocuments.ps1 -Document Resume -InputFile .\docs\documents\job-data.json
```

| `-Document` | 出力 |
| --- | --- |
| `Resume` | 履歴書（Excel） |
| `WorkHistory` | 職務経歴書（Excel） |
| `Interview` | 面接対応資料（Word） |

Excel 生成には `artifact_tool`、Word 生成には `python-docx` が入った Python が必要です。環境を指定するには `-PythonPath` に実行ファイルのパスを渡します。生成スクリプトと保存先は `-GeneratorDirectory` と `-OutputDirectory` で指定できます。

既存の Excel レイアウトは初稿です。参考資料との照合と印刷時の確認は今後の作業です。
