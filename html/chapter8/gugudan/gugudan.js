function gugudan() {
  document.write("<h1>구구단 표</h1>");
  document.write("<table border = 2 width = 50% >");
  var sum = 1;
  for (var i = 1; i <= 9; i++) {
    document.write("<tr>");
    for (var j = 1; j <= 9; j++) {
      document.write("<td>" + j * i + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
