function sendAlbum(){
    if ($('#upload_new_photo').val() == '' ) {
        alert('請選擇照片上傳');
        return;
    } else {
        var img_update = document.querySelector('#img_update');
        var uploadForm = new FormData(img_update);
        xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status == 200){
                let data = xhr.responseText;
                alert('上傳成功!');
            }else{
                alert('上傳失敗');
            }
        }
        xhr.open('post','php/member_center/modify_newImg.php',true);
        xhr.send(uploadForm);

        function resetBtn() {
            $('#upload_new_photo').hide();
            $('#submit_newIMG').hide();
        }
        resetBtn();
    }
}