function strConvetBaloons(oldStr, Tag, params) {
    console.log("変換中！");

    var html  = [
        "<div class=\"voice clearfix "+params.side+" n_bottom\">\n" +
        "<div class=\"icon\"><img src="+params.imgURL+" />\n" +
        "<div class=\"name\">"+ params.name +"</div>\n" +
        "</div>\n" +
        "<div class=\"text sc_balloon "+params.side+" white\">",
        "</div></div>"];

    var balloons = oldStr.match(tagConvertReg(Tag));

    for (var i = 0; i < balloons.length; i++) {
        oldStr = oldStr.replace(balloons[i].replace("<div","").trim(), html[0]+balloons[i].replace(Tag,"").trim()+html[1]);
    }

    console.log("変換中！");
    console.log(oldStr);

    return oldStr;
}

function countConvertStr(str, tag){
    if(str.match(tagConvertReg(tag))){
        return str.match(tagConvertReg(tag)).length;
    }
    reg2 = tagConvertReg(tag);
    alert('置換対象が0件です。');
    javascript_die();// 未定義で終了
}

function tagConvertReg(tag){
    return new RegExp("(\\n"+tag+"|\\r\\n"+tag+"|\\r"+tag+").*?(\\n\\n|\\r\\n\\r\\n|\\r\\r|\\n<div|\\r\\n<div|\\r<div)","gs");
}

function addPanel(){
    var panel_parent = $('#ed_toolbar');
    var panel = $('<div id="mceu_099" class="mce-container mce-toolbar mce-stack-layout-item" role="toolbar"><div id="mceu_099-body" class="mce-container-body mce-flow-layout"><div id="mceu_98" class="mce-container mce-flow-layout-item mce-first mce-last mce-btn-group"role="group"><div id="mceu_98-body"><div id="mceu_080"class="mce-widget mce-btn mce-menubtn mce-fixed-width mce-first mce-btn-has-text"tabindex="-1" aria-labelledby="mceu_080" role="button" aria-haspopup="true"><label for="myBalloon01">開始ワード</label><input name="myBalloon01" id="myBalloon01" type="text" class="mce-widget" size="6" autocomplete="off" value="" placeholder="尾田："></div><div id="mceu_081"class="mce-widget mce-btn mce-menubtn mce-fixed-width mce-first mce-btn-has-text"tabindex="-1" aria-labelledby="mceu_081" role="button" aria-haspopup="true"><label for="myBalloon02">名前</label><input name="myBalloon02" id="myBalloon02" type="text" class="mce-widget" size="10" autocomplete="off" value="" placeholder="尾田理央"></div><div id="mceu_082"class="mce-widget mce-btn mce-menubtn mce-fixed-width mce-first mce-btn-has-text"tabindex="-1" aria-labelledby="mceu_082" role="button" aria-haspopup="true"><label for="myBalloon03">画像URL</label><input name="myBalloon03" id="myBalloon03" type="text" class="mce-widget" size="10" autocomplete="off" value="" placeholder="http://……"></div><div id="mceu_084" class="mce-widget mce-btn" tabindex="-1" aria-pressed="false" role="button"><label for="myBalloon04">右</label><input name="myBalloon04" id="myBalloon04" type="checkbox" class="mce-widget"></div><div id="mceu_088" class="mce-widget mce-btn" tabindex="-1" aria-pressed="false" role="button"><button id="mceu_088-button" role="presentation" type="button" tabindex="-1" onclick="convertBalloon()">実行</button></div><div id="mceu_089" class="mce-widget mce-btn" tabindex="-1" aria-pressed="false" role="button"><a href="https://github.com/asmfnk/WordPressTools/blob/master/README.md" target="_blank"><button id="mceu_089-button" role="presentation" type="button" tabindex="-1">？</button></a></div></div></div></div></div>');
    panel_parent.append(panel);
}

function convertBalloon() {
    var planeText = document.getElementById('content').value;
    var tag  = document.getElementById("myBalloon01").value;
    var name = document.getElementById("myBalloon02").value;
    var url  = document.getElementById("myBalloon03").value;
    var side = document.getElementById("myBalloon04").checked === true? 'right': 'left';

    if(!tag || !name || !url){
        alert("未入力の項目があります。");
        return
    }

    var res = confirm(name+"さんの"+countConvertStr(planeText,tag)+"件の文章を吹き出し化します。");
    if( res === true ) {
        var params = {
            side: side,
            name: name,
            imgURL: url
        };
        document.getElementById('content').value = strConvetBaloons(planeText, tag, params);
    }
}

// パネル追加

var Iter = 0;

var url = window.location.href;
if(url.indexOf('action=edit') !== -1 || url.indexOf('post-new.php') !== -1){
    var loadIter = setInterval(function(){
        if(document.getElementById('mceu_23-body')){
            clearInterval(loadIter);
            addPanel();
        }
        Iter++;
        if(Iter === 100){
            console.log('WordPressにアップデートがあったようです。スクリプトを修正しますので連絡してください。');
        }
        if(Iter > 200)clearInterval(loadIter);
    },200);
}
