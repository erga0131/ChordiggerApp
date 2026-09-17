# ChordiggerApp
## このツールはα版です
SongleのAPIを利用し、コード進行で曲をdigできるツール。  
現状はFlask+HTMLのみで構成されています（CSSすら使ってないので飾り気もないです）。  
pipでflaskとrequestsを入れてserver.pyを起動すれば動くはずですが、mainブランチではJSで書き直したので、こちらはアップデートしない予定です
### 既知の問題点
- 取得する動画の範囲が検索結果にして1ページ目の40件のみになっている
### クレジット
- 本サービスは、国立研究開発法人産業技術総合研究所が提供する Songle API を利用して開発・動作しています。
- 本サービスは非営利の個人による開発物であり、国立研究開発法人産業技術総合研究所との提携・後援・公認関係にあるものではありません。
- 本サービスは非商用目的で提供されています。Songle API の仕様変更やサービス停止等に伴う損害について、当方および産総研は一切の責任を負いません。  
[![powered by Songle API logo](https://tutorial.songle.jp/images/logos/powered-by-songle-api.png)](https://api.songle.jp/)
