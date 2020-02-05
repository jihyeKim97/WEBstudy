function setclock(){
  var now = new Date();
  var str = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
document.getElementById("clock").innerHTML=str;
setTimeout("setclock()",1000);
}
