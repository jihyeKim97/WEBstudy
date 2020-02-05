function example1() {
  var now = new Date();
  document.write(now);
}

function example2() {
  var a;
  a = "Hello World!";
  alert(a);
}

function example3() {
  var a;
  a = 100;
  document.write(a + "<br>");
  s = "홍길동";
  document.write(s + "<br>");
}

function example4() {
  var a = "Hello World!";
  var b = "How are you" + "yoday?";
  document.write(a + "<br>");
  document.write(b + "<br>");
  document.write(b.toUpperCase() + "<br>");
}

function example5() {
  var x, y;
  var input;
  input = prompt("정수를 입력 하세요", "정수로");
  x = parseInt(input);

  input = prompt("정수를 입력 하세요", "정수로");
  y = parseInt(input);
  document.write(x + y + "<br>");
}

function example6() {
  var x = document.getElementById("x").value;

  var y = document.getElementById("y").value;
  var sum;

  sum = parseInt(x) + parseInt(y);
  document.getElementById("sum").value = sum;

}

function example7() {
  e = document.getElementById("test");
  e.style.color = "red";

}

function example8() {
  var msg = "";
  var time = new Date().getHours();
  if (time < 12) {
    msg = "Good Morning";
  } else if (time < 18) {
    msg = "Good Afternoon";
  } else {
    msg = "Good evening";
  }
  alert(msg);
}

function example9() {
  var grade = prompt("성적을 입력하시오:", "A-F사이의 문자로");
  switch (grade) {
    case 'A':
    case 'a':
      alert("잘했어요!");
      break;
    case 'B':
    case 'b':
      alert("좋은 점수군요");
      break;
    case 'C':
    case 'c':
      alert("괜찮은 점수군요");
      break;
    case 'D':
    case 'd':
      alert("좀더 노력하세요");
      break;
    case 'F':
    case 'f':
      alert("다음학기 수강하세요");
      break;
    default:
      alert("알수없는 학점입니다.")
  }
}

  var computerNumber = 53;
  var nGuesses = 0;
  function guess() {
    var result = "";
    var number = parseInt(document.getElementById("user").value);
    nGuesses++;
    if (number == computerNumber) result = "성공입니다.";
    else if (number < computerNumber) result = "낮습니다.";
    else result = "높습니다.";
    document.getElementById("result").value = result;
    document.getElementById("guesses").value = nGuesses;
    return true;
  }
