# WPT(WordPressTools)
- WordPressでの記事編集作業を効率化するスクリプトです。
- 実行前には記事を保存しておき、復活できるようにしてください。
- 操作パネルが表示されなくなったり、バグ、要望があればSlackでお願いします。

# 準備
WPTをWordPress内で実行するためにChromeの拡張機能をインストールします。  
（説明はChromeでの使い方だけですが、JSを実行できれば他のブラウザでも可能だと思います）  

1. まず下の拡張機能をインストールしてください。  
<a href="https://chrome.google.com/webstore/detail/scriptautorunner/gpgjofmpmjjopcogjgdldidobhmjmdbm" target="_blank">ScriptAutoRunner</a>  

2. インストールするとChromeの上部に稲妻マークが出てくると思うのでそこから設定に入ってください。  
  
<img width="1066" alt="2018-09-11 15 02 24" src="https://user-images.githubusercontent.com/10721794/45341107-429bc880-b5d4-11e8-841f-3f6756a748aa.png">  
  
この画像のとおりに編集していきます。  
最初に表示されているボックスがあったら無視するかゴミ箱マークで削除してください。  

3. プラスの横の鎖マークを押すとボックスが出てきます。  
   ここに`https://rawgit.com/asmfnk/WordPressTools/master/wpt_main.js`と入力してください。これはこのGithubのサーバーに上がっているWPTファイルです。  
   ***（2020/10/04追記）*** rawgitがサービス提供を終了していましたので、jsdelivrにmigrateしました。また、githubのrepositoryも変更しました。URLはこちら( `https://cdn.jsdelivr.net/gh/orario-developer/WordPressTools@master/wpt_main.js` ) です。

4. その下の`target host name`には`shukatsuhack.com`を入力してください。

5. 最後にコンセントマークをクリックして全体が黄色になったら完了です。これにより`shukatsuhack.com`にアクセスするとスクリプトが自動で実行されるようになります。

# 吹き出し変換の使い方
以下のような吹き出し形式はWordPress内で入力補助を使うと入れることができますが、すべてのセリフでポチポチ入力するのは現実的ではありません。  
WPTでこれを簡単に変換できるようにしました。  

<img width="553" alt="2018-09-06 16 23 13" src="https://user-images.githubusercontent.com/10721794/45352131-c5cc1700-b5f2-11e8-8d65-8c8cddf6cdad.png">  
  
先に述べた準備が完了している場合は記事編集画面でこのような入力フォームが追加されていると思われます。  
表示されていない場合は一度ビジュアルに切り替えてからテキストに戻してください。
  
<img width="566" alt="2018-09-11 16 11 49" src="https://user-images.githubusercontent.com/10721794/45344076-c1e1ca00-b5dd-11e8-97de-a691914f7933.png">  
  
文章はテキストモードで以下のように作成してください。フォームを埋めて、実行を押すと指定した人すべてのセリフが変換されます。
```
田中さんのインタビューです

田中：こんにちは

佐藤：こんにちは。よろしくお願いいたします。
早速ですが、田中さんは…

就活のタイミング

佐藤：いつ頃から就活をされたのですか？

田中：35億年前ですね

……
```

# 各フォームの説明  
|フォーム|説明|
|:---|:---|
|開始ワード|「田中：」といったセリフが始まる前に入れた文字列|
|名前|サムネイルの下に表示される名前|
|画像URL|サムネイルのURL。メディアを追加をクリックし画像を選択すると出てくるURL|
|右|チェックを入れるとサムネが右になる|
|実行|変換実行。実行前にテキスト全体をコピーしておくかどこかに保存しておきましょう|
#### 注意！
- 開始ワードは直前に改行がひつようです（一行目文頭の開始ワードは認識されません）。
- セリフの終了は***2回の改行***が必要です（文章の最後は忘れがちなので注意）。

# for developer
### how to test
1. `https://github.com/orario-developer/WordPressTools.git` をfork。

2. 変更分を、forkした自分のrepositoryにpush。

2. `準備` 欄の手順に従い、WPをセットアップ。

3. `ScriptAutoRunner` にセットするURLを以下に変更。`https://cdn.jsdelivr.net/gh/YOUR_REPOSITORY/WordPressTools@YOUR_BRANCH/wpt_main.js` (`YOUR_REPOSITORY` には、自分のgithubのユーザー名が入ります。また、`YOUR_BRANCH` には、開発中のbranch名が入ります。)  
reference: https://www.jsdelivr.com/?docs=gh  
※ branch名を `hogehoge/fugafuga` のように、 `/` が入ったものにしてしまうと、上手く反映されない可能性があります。

### change log
- 2020/10/04  
「テキスト」を選択した本文入力時に、簡易入力機能が標示されないバグを修正。

- 2020/10/09  
READMEを編集。  
デザインを修正。

- 2020/10/09（2）  
デザインを修正。