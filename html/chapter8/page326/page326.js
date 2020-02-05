function example10() {
  var age = prompt("100미만의 정수만 입력")
  if (age > 100) {
    alert("정수101,은 100보다 작지 않습니다.")
  } else {
    alert("100이하의 정수입니다")
  }
}

function example11() {
  var sum = 0;
  for (var i = 1; i <= 100; i++) {
    sum += i;
  }
  alert("1부터 100까지의 합 : " + sum);
}

function example12() {
  var x = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
  for (var i = 1; i < x.length; i++) {
    alert(x[i]);
  }
}

function process() {
  var result = confirm("게임 한판 하실라우?");
  return result;
}

function example13() {
  var sult = process();

  if (sult) {
    alert("좋습니다. 게임을 시작합니다");
  } else {
    alert("네, 나중에 하세요");
  }
}

function example14() {

  var x = document.getElementById("singer").value;
  var y = document.getElementById("playingtime").value;
  var z = document.getElementById("title").value;

  alert(x + "" + y + "" + z + "");

}
