function example4() {
  var sum = 0;
  var startTime = new Date().getTime();
  for (var i = 0; i <= 1000000; i++) {
    sum += i;
  }
  var endTime = new Date().getTime();
  alert("0부터 백만까지 더하는데 걸리는 시간" + (endTime - startTime) + "밀리초가 걸렸음!");
}

function example5() {
  var value = "hong";
  var str = value.substring(0, 1).toUpperCase() + value.substring(1);
  alert(str);

}

function example6() {
  var months = ["Jan", "Fed", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var todaymon = new Date();
  document.write(months[todaymon.getMonth()]);
}

function example7() {
  var movies = ["Terminator", "Transformer", "Toy Story 3",
    "Frozen", "Ironman", "joker"
  ];
  movies.push("Man of Steel");
  movies[movies.length - 2] = "Spiderman";
  alert(movies[movies.length - 1]);
}

function example8() {
  var arr = ["사과", "귤", "청포도", "포도", "지몽", "오렌지"];
  var num = Math.floor(Math.random() * 6 + 0);
  alert(arr[num]);
}


function example9() {
  var arr = ["hello", 10, 32.6, true];
  var value = 10;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      alert(arr[i]);
    }else{
      alert("없습니다");
    }
  }
}

function example10() {

    var stringval = "javascript";
    var str = "java";

  alert(stringval.inclu


    des(str));
}

function example11() {
  function showDate() {
    var today = new Date();
    var m = today.getMonth() + 1;
    var d = today.getDate();
    document.write(m + "월" + d + "일");
  }
  setTimeout(showDate(), 86400000);
}
