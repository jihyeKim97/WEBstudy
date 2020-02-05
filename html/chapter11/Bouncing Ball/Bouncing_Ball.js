var numx;
var numy;
var numdx;
var numdy;
var id;

//검증---X
function Verificationx() {
  var exp = /^[0-9]{3}$/;
  var x = document.getElementById('playx');
  if (x.value.match(exp)) {
    numx = Number(x.value);
    console.log(numx);
    if (numx >= 300 && numx <= 500) {
      alert("검증이 되었습니다")
      return true;
    } else {
      alert("300~500사이의 범위를 벗어 났습니다 다시 입력 하세요");
      return false;
    }
  } else {
    alert("300~500사이의 범위를 벗어 났습니다 다시 입력 하세요");
    return false;
  }
}
//검증---Y
function Verificationy() {
  var exp = /^[0-9]{3}$/;
    var y = document.getElementById('playy');
  if (y.value.match(exp)) {
    numy = Number(y.value);
    if (numy >= 200 && numy <= 400) {
      alert("검증이 되었습니다")
      return true;
    } else {
      alert("200~400사이의 범위를 벗어 났습니다 다시 입력 하세요");
      return false;
    }
  } else {
    alert("200~400사이의 범위를 벗어 났습니다 다시 입력 하세요");
    return false;
  }
}
//검증---DX
function Verificationdx() {
  var exp = /^[0-9]{1,2}$/;
  var dx = document.getElementById('playdx');
  if (dx.value.match(exp)) {
    numdx = Number(dx.value);
    if (numdx >= 5 && numdx <= 10) {
      alert("검증이 되었습니다")
      return true;
    } else {
      alert("5~10사이의 범위를 벗어 났습니다 다시 입력 하세요");
      return false;
    }
  } else {
    alert("5~10사이의 범위를 벗어 났습니다 다시 입력 하세요");
    return false;
  }
}
//검증---DY
function Verificationdy() {
  var exp = /^[0-9]{1,2}$/;
    var dy = document.getElementById('playdy');
  if (dy.value.match(exp)) {
    numdy = Number(dy.value);
    if (numdy >= 5 && numdy <= 10) {
      alert("검증이 되었습니다")
      return true;
    } else {
      alert("5~10사이의 범위를 벗어 났습니다 다시 입력 하세요");
      return false;
    }
  } else {
    alert("5~10사이의 범위를 벗어 났습니다 다시 입력 하세요");
    return false;
  }
}
function draw() {
  console.log(numx);
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, 500, 500);
  context.beginPath();
  context.fillStyle = "red";
  context.arc(numx, numy, 20, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();
  if (numx < (0 + 20) || numx > (500 -20))
    numdx = -numdx;
  if (numy < (0 + 20) || numy > (500 - 20))
    numdy = -numdy;
  numx += numdx;
  numy += numdy;
}
//시작할수 있는 함수
function startaction() {
  id = setInterval(draw, 15);
}

//정지함수
function stopaction() {
  clearInterval(id);
}
// function playtestaction(){
//
// }
