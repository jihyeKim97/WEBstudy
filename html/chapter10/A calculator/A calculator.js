var sum = "";

function add(num) {
  sum = sum + num;
  document.getElementById("target").value = sum;
}

function clear1() {
  sum = "";
  document.getElementById("target").value = 0;
}

function enter() {
  document.getElementById("target").value = eval(sum);
}
