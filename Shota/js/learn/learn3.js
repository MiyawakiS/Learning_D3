//ドットインストールより学習その３

//配列について
var score = [100, 200, 30];
console.log(score[0]);
score[2] = 39;
//console.log(score[2]);
var data = [
  [2, 3, 4],
  [2, 39, 3]
];
console.log(data[1][1]); //39取得


//オブジェクトについて
var user = {
  name: "宮脇", //プロパティ
  mail: "miyawaki@gmail.com",
  greet: function(name){  //メソッド
    console.log("Hello, " + name + "from" + this.mail); //thisは直前のオブジェクトを指す
  }

};
console.log(user.name);
user.greet(user.name);


/*
組み込みオブジェクト = JSが予め用意しているメソッド
- String
- Array
- Math
-Date
*/

var mozi = new String("Machi"); //文字列オブジェクト
var mozi2 = "Sophia"; //文字列リテラル <-- 文字列を自動でオブジェクトに変換している
console.log(mozi.length);
console.log(mozi2.length);
console.log(mozi.replace("M", "m"));

/*
配列オブジェクトについて
unshift -> array <- push
shift <- array -> pop
*/
var hairetu = new Array(39, 393, 3939); //配列オブジェクト
var hairetu2 = [39, 39, 39]; //配列リテラル
console.log(hairetu.length)

hairetu2.push(500);
console.log(hairetu2);

/*
Mathオブジェクト
*/
console.log(Math.PI);
console.log(Math.ceil(39.3)); //切り上げ
console.log(Math.floor(39.3)); //切り捨て
console.log(Math.round(39.3)); //四捨五入
console.log(Math.random()); //0~1まででランダムな数字を

/*
日付オブジェクト
*/
var today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getTime());
console.log(today.getTime()); //UTC時刻を取得　経過ms
