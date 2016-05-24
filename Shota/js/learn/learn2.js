//ドットインストールより学習その２

//関数処理
function hello(){
  console.log("あなたが好き。");
}

function miku(name){
  var msg = "hello, "+ name; //ローカル変数
  return msg

}

hello();
var you = miku("rin");
console.log(you);

//匿名関数処理
var puricure = function(name){
  var serihu = "cv" + name +"「ピュアップ、ラパパ♡」";
  return serihu;
}

var love = puricure("まな");
console.log(love);

//即時関数処理
(function (name){
  var love = "宮脇が思うに"; //即時関数にすることで、変数loveをローカル変数にすることができる。
  console.log(love + "くまみこで一番可愛い" + name);
})("まちちゃん");



/*タイマー処理について
setInterval 第二引数ピコ秒ごとに処理を実行(その前の処理が終わったかどうか関係なく)
setTimeout　第二引数ピコ秒に一回のみ、処理を実行。
*/

function show(){
  console.log(i++);
  var tid = setTimeout(function(){
    show();
  }, 1000);
  if(i>10){
    clearTimeout(tid); //このメソッドは、timerIDを引数に指定して、タイマー処理を無効化する
  }
}

var i=0;
show();
