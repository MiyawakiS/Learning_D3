//svgとの連携

function animation(){
  var c = document.getElementsByTagName("circle");

  for(var i=0; i<c.length; i++){
    c[i].setAttribute("cx", setRandom(600));
    c[i].setAttribute("cy", setRandom(400));
    c[i].setAttribute("r", setRandom(100));

  }
}


function setRandom(n){
  return Math.floor(Math.random() * (n+1)); //ランダムの整数値を返す
}
