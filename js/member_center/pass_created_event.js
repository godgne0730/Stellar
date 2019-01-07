var passEvent = new XMLHttpRequest();
    passEvent.open('GET', `php/member_center/pass_created_event.php`, true);

    passEvent.onload = function() {
        if (passEvent.status >= 200 && passEvent.status < 400) {
            if (passEvent.responseText.length > 11 ) {
                document.querySelector('#pass_event_box_content').innerHTML = passEvent.responseText;
            } else {
                document.querySelector('#pass_event_box_content').innerHTML = "<p style='color:#FFF;font-size:30px;padding-top:10%;text-align:center;'>目前沒有資料</p>";
            }
        }
    };
passEvent.send();