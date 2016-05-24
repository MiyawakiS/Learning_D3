//ドットインストールより学習

console.log("hello, world.");

var x = 10;
x += 5;
console.log(x); //x = 15

var s = "初音ミク";
console.log(s);

//do, while文
var i=20;
do{
  console.log(i);
  i++;
}while(i<10); //一回だけ処理が実行されている。


/*
alert
confirm
prompt　について
*/

//alert("さてはお前、マチちゃんに惚れてるな？");
var answer = confirm("力が欲しいか？"); //返り値が、true or false
console.log(answer);
if(confirm("何を代えてでも？")){
  console.log("愛するものよ、死に候。");
}

var name = prompt("貴様、名は？", "ロリコン");
if(name == "宮脇"){
  console.log("穂乃果がアンタのこと好きだってさ。");
}
else{
  console.log("死に候。")
}
