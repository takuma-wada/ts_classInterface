# ts_classInterface

typeScript触ってみたrepo


## 環境構築メモ
npm init. 

npm install --save-dev lite-server. 

package.jsonのscriptsに以下を追加  
> "start": "lite-server"


## デバッグメモ
- watchモード(lite-server)
tsc {ファイル名} -w

- 複数tsファイルを実行する場合
1. rootで tsc --init を実行
2. tsc コマンドで複数ファイルを実行可能
3. もしくは、tsc -w でwatchモードも可能 
