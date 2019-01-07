var albumManage = new XMLHttpRequest();
    albumManage.open('GET', `php/member_center/album_manage.php`, true);

    albumManage.onload = function() {
        if (albumManage.status >= 200 && albumManage.status < 400) {
            if (albumManage.responseText.length > 11 ) {
                document.querySelector('#album_content_box').innerHTML = albumManage.responseText;
            } else {   
                document.querySelector('#album_content_box').innerHTML = "<p style='color:#FFF;font-size:30px;padding-top:10%;text-align:center;'>目前沒有資料</p>";
            }
        }
    };
albumManage.send();