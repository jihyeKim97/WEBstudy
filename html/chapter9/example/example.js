function datesuntilNewYear() {
  var now = new Date();
  var newYear = new Date('january 1,' + (now.getFullYear() + 1));
  var diff = newYear - now;
  var milliseconds = Math.floor(diff % 1000);
  diff = diff / 1000;
  var seconds = Math.floor(diff % 60);
  diff = diff / 60;
  var minutes = Math.floor(diff % 60);
  diff = diff / 60;
  var hours = Math.floor(diff % 24);
  diff = diff / 24;
  var days = Math.floor(diff);

  var outstr = '내년도 신정까지' + days + '일' + hours + '시간' + minutes;
  outstr += '분, ' + seconds + '초' + '남았습니다.';

  setTimeout("datesuntilNewYear()", 1000);
}
