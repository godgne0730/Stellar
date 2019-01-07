//暱稱驗證
$('#nickName').on('change',function(){
    let val = $(this).val();
    let re = /\s/ ;
    if (re.test(val)) {
        $('#nickName_check').show();
        $('#nickName_check').text("*暱稱不得含有空白");
    } else {
        $('#nickName_check').text('');
        $('#nickName_check').hide();
    }
});
//email認證
$('#email').on('change',function(){
    let val = $(this).val();
    let re = /^.+@.+\..{2,3}$/;
    let re2 = /\s/ ;
    if (re.test(val) && re2.test(val) == false ) {
        $('#email_check').text('');
        $('#email_check').hide();
    } else {
        $('#email_check').show();
        $('#email_check').text("*格式錯誤,請重新輸入");
    }
});
//舊密碼認證
$('#oldPsw').on('change',function(){
    let val = $(this).val();
    let oldpsw = $('#pswContent').text();
    if (val != oldpsw ) {
        $('#oldPsw_check').show();
        $('#oldPsw_check').text("*舊密碼輸入錯誤");
    } else {
        $('#oldPsw_check').text('');
        $('#oldPsw_check').hide();
    }
});
//新密碼
$('#newPsw').on('change',function(){
    let val = $(this).val();
    let re = /\s/ ;
    let length = $(this).val().length;
    if (length <= 8 && re.test(val) == false){
        $('#newPsw_check').text('');
        $('#newPsw_check').hide();
    }else if(length > 8) {
        $('#newPsw_check').show();
        $('#newPsw_check').text("*不得超過8位數");
    }else if(re.test(val)) {
        $('#newPsw_check').show();
        $('#newPsw_check').text("*不得含有空白");
    }
});
//確認新密碼
$('#checkPsw').on('change',function(){
    let val = $(this).val();
    let pswVal = $('#newPsw').val();
    console.log(val);
    console.log(pswVal);
    if ( val != pswVal) {
        $('#checkPsw_check').show();
        $('#checkPsw_check').text("*密碼錯誤");
    } else {
        $('#checkPsw_check').text('');
        $('#checkPsw_check').hide();
    }
});