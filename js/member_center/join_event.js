var joinEvent = new XMLHttpRequest();
    joinEvent.open('GET', `php/member_center/join_event.php`, true);

    joinEvent.onload = function() {
        if (joinEvent.status >= 200 && joinEvent.status < 400) {
            if (joinEvent.responseText.length > 11 ) {
                document.querySelector('#now_join_event_box_content').innerHTML = joinEvent.responseText;
            } else {
                document.querySelector('#now_join_event_box_content').innerHTML = "<p style='color:#FFF;font-size:30px;padding-top:10%;text-align:center;'>目前沒有資料</p>";
            }
        }
    };
joinEvent.send();
console.log(joinEvent.responseText.length);