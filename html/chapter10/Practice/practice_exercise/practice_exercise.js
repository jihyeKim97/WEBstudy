function example1(elem,msg) {
  var exp = /^[0-9]+$/;
  if (elem.value.match(exp)) {
alert("전화번호를 알맞게 입력하셧습니다");
    return true;
  } else {
    alert(msg);
    return false;
  }
}

function example2(elem,mssage) {
  if (elem.value == 0) {
    alert(mssage);
    return false;
  } else {
    alert("선택을 하셧군요!")
    return true;
  }
}

function example5() {
  alert("반갑습니다");
}

function example6() {
  document.getElementById("textareaclick").innerHTML = "이 텍스트는 자바 스크립트에서 변경한 것입니다";
}

function example7(elem, msg) {
  var exp = /^[0-9]$/;
  if (elem.value.match(exp)) {
alert("알맞게 입력을 하셧습니다")
    return true;
  } else {
    alert(msg);
    return false;
  }

}

function example8() {
  document.getElementById("image").src = "./image/blue.png";
}

function checkNotEmpty(field) {
  // var exp = /^[a-zA-Z가-힣]$/;
  // if(elem.value.match(exp)){
  //   return true;
  // }else{
  //   alert("숫자를 제외하고 이름을 적어주세요");
  //   return false;
  // }
  if (field.value.length == 0) {
    alert("빈칸없이 작성 해 주세요");
    field.focus();
    return false;
  }
  alert("이름이 확인 되었습니다")
  return true;

}

function phonenumbercheck(elem) {
  var exp = /^\d{3}-\d{3,4}-\d{4}$/;
  if (elem.value.match(exp)) {
    alert("형식에 맞는 전화번호 입니다");
    return true;
  } else {
    alert("숫자 이외의 문자가 들어있습니다");
    return false;
  }
}

function emailcheck(email) {
  var emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (!email.value.match(emailRule)) {
    //경고
    alert("형식에 맞지 않은 이메일 입니다.")
    return false;
  } else {
    alert("형식에 맞는 이메일입니다")
    return true;
  }
}

// function passwordcheck(password) {
//   var passwordRule = /^.*(?=.{6,8})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
//
//   if (!password.value.match(passwordRule)) {
//     //경고
//     alert("형식에 맞지 않은 패스워드 입니다.")
//     return false;
//   } else {
//     alert("형식에 맞는 패스워드입니다")
//     return true;
//   }
// }

function passwordcheckcheck(passwordcheck) {
  if (document.getElementById('password').value != '' && document.getElementById('passwordcheck').value != '') {
    if (document.getElementById('password').value == document.getElementById('passwordcheck').value) {
      document.getElementById("checkmessage").innerHTML = "패스워드가 일치합니다";
      document.getElementById("checkmessage").style.color = 'blue';
    } else {
      document.getElementById("checkmessage").innerHTML = "패스워드가 일치 하지 않습니다";
      document.getElementById("checkmessage").style.color = 'red';
    }
  }

}
