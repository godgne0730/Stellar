function sendMeminfo(){
    if ($('#nickName_check').text() != '') {
        alert('暱稱格式錯誤,請檢查');
        return;
    }
    if ($('#nickName').val() == '' ) {
        alert('新暱稱尚未輸入');
        return;
    }
    if ($('#email_check').text() != '' ){
        alert('Email格式錯誤,請檢查');
        return;
    }
    if ($('#email').val() == '' ) {
        alert('新Email尚未輸入');
        return;
    }
    if ($('#oldPsw_check').text() != '' ) {
        alert('舊密碼輸入錯誤');
        return;
    }
    if ($('#oldPsw').val() == '' ) {
        alert('舊密碼不得為空');
        return;
    }
    if ($('#newPsw_check').text() != '' ) {
        alert('新密碼格式錯誤');
        return;
    }
    if ($('#newPsw').val() == '' ) {
        alert('新密碼不得為空');
        return;
    }
    if ($('#checkPsw_check').text() != '' ) {
        alert('確認新密碼輸入錯誤');
        return;
    }
    if ($('#checkPsw').val() == '' ) {
        alert('確認新密碼不得為空');
        return;
    }
    var info_update = document.querySelector('#info_update');
    var uploadForm = new FormData(info_update);
    
    xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            let data = xhr.responseText;
            console.log(data);
            console.log('After sending: ');
        }else{
            console.log('Ajax status: ' + xhr.status);
        }
    }
    xhr.open('post','php/member_center/send_meminfo.php',true);
    xhr.send(uploadForm);
    alert('修改成功!');
    
    function return_info(){
        $('#modify_box').fadeOut(1);
        $('#info_box').css('display','inline-block').fadeIn(1);
    }
    
    function reload_img() {
        var newImg = new XMLHttpRequest();
        newImg.open('GET', `php/member_center/modify_img.php`, true);

        newImg.onload = function() {
            if (newImg.status >= 200 && newImg.status < 400) {
                document.querySelector('#new_photo').src = newImg.responseText;
                console.log(newImg.responseText);
            }
        };
        newImg.send();
    }
    
    function reload_info(){
        var memInfo = new XMLHttpRequest();
        memInfo.open('GET', `php/member_center/member_info.php`, true);

        memInfo.onload = function() {
            if (memInfo.status >= 200 && memInfo.status < 400) {
               document.querySelector('#info_container').innerHTML = memInfo.responseText;
            }
        };
        memInfo.send();
    }

    function reset_val() {
        $('#nickName').val('');
        $('#email').val('');
        $('#oldPsw').val('');
        $('#newPsw').val('');
        $('#checkPsw').val('');
    }
    return_info();
    reload_img();
    reload_info();
    reset_val();
}