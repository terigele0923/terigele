# 就活資料生成ツール

Windows PowerShell から、就活データの入力確認と書類生成を行います。生成には既存の Codex 用 Python スクリプトを使います。

| 場所 | 用途 |
| --- | --- |
| `docs/documents/` | 元資料と、必要に応じて保存した入力 JSON |
| `docs/deliverables/` | 生成した書類の既定の保存先 |
| `~/.codex/data/job_data.template.json` | 入力 JSON のひな型 |
| `~/.codex/scripts/` | 既存の書類生成スクリプト |

ひな型を任意の場所にコピーし、確認できた本人情報と応募先情報を入力します。履歴書と職務経歴書は同じ JSON を使えます。面接対応資料では `application.company` と `application.position` を入力します。

生成前に、対象書類の必須項目を `-ValidateOnly` で確認します。空欄や「要確認」などの仮入力、`information_to_confirm` に残っている項目があれば、エラーに表示された項目を本人に確認してください。複数の書類で入力を共有する場合は、対象書類に関係する未確認事項を管理してください。この実行では書類を生成しません。

```powershell
.\.agents\scripts\Generate-JobDocuments.ps1 -Document Resume -InputFile .\docs\documents\job-data.json -ValidateOnly
```

本人の回答や元資料で情報を確認したら、`-ValidateOnly` を外して生成します。生成時にも同じ必須項目チェックが働きます。

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
