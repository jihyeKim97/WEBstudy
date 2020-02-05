$(document).ready(function () {

    let $inputId = $("#inputId");
    let $inputPassword = $("#inputPassword");
    let $inputPasswordCheck = $("#inputPasswordCheck");
    let $inputName = $("#inputName");
    let $inputFirstEmail = $("#inputFirstEmail");
    let $inputSecondEmail = $("#inputSecondEmail");
    let $btResult = $("#bt_result");

    let idExp = /^[a-zA-Z0-9]{6,10}$/;
    let passwordExp = /^[a-zA-Z0-9]{8,12}$/;
    let nameExp = /^[가-힣]{2,5}$/;
    let firstEmailExp = /^[a-zA-Z0-9]{6,10}$/;
    let secondEmailExp = /^[0-9a-zA-Z]+\.[a-zA-Z]{2,3}$/;

    let $checkId = $("#checkId");
    let $checkPass = $("#checkPass");
    let $checkName = $("#checkName");
    let $checkEmail = $("#checkEmail");

    let checkArray = [$checkId, $checkPass, $checkName, $checkEmail];// 배열
//--------------------키를 누르고 땟울때=keyup
    $inputId.keyup(function (e) { //아이디의 형식이 올바른지 확인
        console.log($inputId.val());
        if(!idExp.test($inputId.val())) {
            $checkId.text("형식에 맞지 않습니다.");
            console.log($inputId.val()+"if");
        } else {
            $checkId.text("올바른 형식 입니다.");
            console.log($inputId.val()+"else");
        }
    });
    $inputPassword.keyup(function (e) { //비밀번호의 형식이 올바른지 확인
        console.log($inputPassword.val());
        if(!passwordExp.test($inputPassword.val())) {
            $checkPass.text("형식에 맞지 않습니다.");
        } else {
            $checkPass.text("올바른 형식 입니다.");
        }
    });
    $inputPasswordCheck.keyup(function (e) { //비밀번호확인이 비밀전호의 형식에 맞춰 같은지 확인
        console.log($inputPasswordCheck.val());
        if(!($inputPassword.val() === $inputPasswordCheck.val())) {
            $checkPass.text("일치 하지 않습니다.");
        } else {
            $checkPass.text("일치 합니다.");
        }
    });
    $inputName.keyup(function (e) { //이름의 형식이 맞는지 확인
        console.log($inputName.val());
        if(!nameExp.test($inputName.val())) {
            $checkName.text("형식에 맞지 않습니다.");
        } else {
            $checkName.text("올바른 형식 입니다.");
        }
    });
    $inputFirstEmail.keyup(function (e) { //이메일아이디의 형식이 맞는지 확인
        console.log($inputFirstEmail.val());
        if(!firstEmailExp.test($inputFirstEmail.val())) {
            $checkEmail.text("형식에 맞지 않습니다.");
        } else {
            $checkEmail.text("올바른 형식 입니다.");
        }
    });
    $inputSecondEmail.keyup(function (e) { //이메일의 주소의 형식이 맞는지 확인
        console.log($inputSecondEmail.val());
        if(!secondEmailExp.test($inputSecondEmail.val())) {
            $checkEmail.text("형식에 맞지 않습니다.");
        } else {
            $checkEmail.text("올바른 형식 입니다.");
        }
    });
    $btResult.click(function () { //회원가입의 버튼을 눌렀을때
        let checkBoxAge = $("#checkBoxAge").is(":checked");//체크 박스가 체크가 되었는지 안되어있는지 확인 여부
        let checkBoxUse = $("#checkBoxUse").is(":checked");
        let checkBoxInfo = $("#checkBoxInfo").is(":checked");
        let checkBoxBirth = $("#checkBoxBirth").is(":checked");
        let checkBoxEmail = $("#checkBoxEmail").is(":checked");
        let checkBoxTerm = $("#checkBoxTerm").is(":checked");

        console.log(checkBoxAge,checkBoxUse,checkBoxInfo);

        if(!(checkBoxAge && checkBoxUse && checkBoxInfo &&//만약 체크가 되어있지 않다면 채크를 해달라고 alert로 띄어준다
            checkBoxBirth && checkBoxEmail && checkBoxTerm)) {
            alert("try check CheckBox");
            return;
        }
        if(((!$inputId.val()) || (!$inputPassword.val()) || (!$inputPasswordCheck.val()) || //하나라도 input값이 비어있으면 input을 확인해 달라고  alert로 띄어준다
        (!$inputName.val()) || (!$inputFirstEmail.val()) || (!$inputSecondEmail.val()))) {
            console.log(((!$inputId.val()) || (!$inputPassword.val()) || (!$inputPasswordCheck.val()) ||
            (!$inputName.val()) || (!$inputFirstEmail.val()) || (!$inputSecondEmail.val())));
            alert("입력되지 않은 input이 있습니다");
            return;
        }
        console.log(((!$inputId.val()) || (!$inputPassword.val()) || (!$inputPasswordCheck.val()) ||
        (!$inputName.val()) || (!$inputFirstEmail.val()) || (!$inputSecondEmail.val())));
        for(let i = 0; i < checkArray.length; i++) {//배열에 담은 값들의 길이 만큼 반복문을 이용해 배열의 아이번째가 텍스트의 형식에 맡지 않으면 alert으로 틀렸다고 알려준다
            console.log(checkArray[i].text());
            if(checkArray[i].text() === "형식에 맞지 않습니다.") {
                alert("오류입니다");
                return;
            }
        }
      if(confirm("회원가입을 축하합니다")){
        var url ="./login.html"
        window.open(url,"_blank");
      }
    });
});
