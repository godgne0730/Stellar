var passJoin = new XMLHttpRequest();
    passJoin.open('GET', `php/member_center/pass_join_event.php`, true);

    passJoin.onload = function() {
        if (passJoin.status >= 200 && passJoin.status < 400) {
            if ( passJoin.responseText.length > 11 ) {
                document.querySelector('#pass_join_event_box_content').innerHTML = passJoin.responseText;
            } else {
                document.querySelector('#pass_join_event_box_content').innerHTML = "<p style='color:#FFF;font-size:30px;padding-top:10%;text-align:center;'>目前沒有資料</p>";
            }
        }
    };
passJoin.send();