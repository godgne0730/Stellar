var newImg = new XMLHttpRequest();
    newImg.open('GET', `php/member_center/modify_img.php`, true);

    newImg.onload = function() {
        if (newImg.status >= 200 && newImg.status < 400) {
            document.querySelector('#new_photo').src = newImg.responseText;
            console.log(newImg.responseText);
        }
    };
newImg.send();

//預覽照片
$('#upload_new_photo').on("change",function(){
    var pic = this.files[0];
    var sr  = window.URL.createObjectURL(pic);
    $('#new_photo')[0].src = sr;
});