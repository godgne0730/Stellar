var memInfo = new XMLHttpRequest();
    memInfo.open('GET', `php/member_center/member_info.php`, true);

    memInfo.onload = function() {
        if (memInfo.status >= 200 && memInfo.status < 400) {
            if ( memInfo.responseText.length > 11 ) {
                document.querySelector('#info_container').innerHTML = memInfo.responseText;
            } else {
                document.querySelector('#info_container').innerHTML ="<p style='color:#FFF;font-size:30px;padding-top:10%;text-align:center;'>目前沒有資料</p>";
            }
        }
    };
memInfo.send();