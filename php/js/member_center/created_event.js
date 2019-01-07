var nowEvent = new XMLHttpRequest();
    nowEvent.open('GET', `php/member_center/created_event.php`, true);

    nowEvent.onload = function() {
        if (nowEvent.status >= 200 && nowEvent.status < 400) {
            if (nowEvent.responseText.length > 11 ) {
                document.querySelector('#now_event_box_content').innerHTML = nowEvent.responseText;
            } else {
                document.querySelector('#now_event_box_content').innerHTML ="<p style='color:#FFF;font-size:30px;padding-top:10%;text-align:center;'>目前沒有資料</p>";
            }
        }
    };
nowEvent.send();