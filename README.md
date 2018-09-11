# WPT(WordPressTools)
- WordPressでの記事編集作業を効率化するスクリプトです。
- 実行前には記事を保存しておき、復活できるようにしてください。
- 吹き出しの追加に限らず、なんか同じ作業繰り返してんな〜と思ったら相談してください。

## 使い方

## 準備
作成したJSをWordPress内で実行するためにChromeの拡張機能をインストールします。  
（ここではChromeでの使い方だけですが、JSを実行できれば他のブラウザでも可能だと思います）  
- まず下の拡張機能`ScriptAutoRunner`をインストールしてください。
https://chrome.google.com/webstore/detail/scriptautorunner/gpgjofmpmjjopcogjgdldidobhmjmdbm  
- インストールするとChromeの上部に稲妻マークが出てくると思うのでそこから設定に入ってください。  
  
<img width="1066" alt="2018-09-11 15 02 24" src="https://user-images.githubusercontent.com/10721794/45341107-429bc880-b5d4-11e8-841f-3f6756a748aa.png">  
  
- この画像のとおりに編集していきます。  
最初に表示されているボックスがあったら無視するかゴミ箱マークで削除してください。
- プラスの横の鎖マークを押すとボックスが出てきます。ここに`https://rawgit.com/asmfnk/WordPressTools/master/wpt_main.js`と入力してください。  これはこのGithubのサーバーに上がっているWPTファイルです。
- その下の`target host name`には`shukatsuhack.com`を入力してください。
- 最後にコンセントマークをクリックして全体が黄色になったら完了です。これによりshukatsuhack.comにアクセスするとスクリプトが実行されるようになります。
