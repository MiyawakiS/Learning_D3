//ドットインストールより学習その4 (DOM操作)

//objectのプロパティを確認する
console.dir(window);
console.log(window.outerHeight); //windowの高さ取得
//window.location.href = "http://dotinstall.com";

//window.document - 今開いてるページ
//document object model (DOM)


var e = window.document.getElementById("msg");
e.textContent = "Let's go!"; //id = msgに対して、テキストの書き換え
e.style.color = "orange"; //要素に対して
e.className = "textStyle"; //外部CSSより読み込み



//イベントの設定
document.getElementById("add").addEventListener("click", function(){
  var greet = window.document.createElement("p");
  var text = window.document.createTextNode("ホノカチャン！！");
  document.body.appendChild(greet).appendChild(text);
  greet.style.color = "rgb(93,247,10)";
});
