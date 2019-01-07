window.onload = getData;

function getData() {
    var apManage = new XMLHttpRequest();
    apManage.onload = function() {
        if (apManage.status == 200) {
            var datas = apManage.responseText;
            insertData(datas);
            count(datas);
        }else{
            console.log('Ajax status: ' + xhr.status);
        }
    };
    apManage.open('post', 'php/knowledge/countdown_box.php', true);
    apManage.setRequestHeader('content-type','application/x-www-form-urlencoded');
    apManage.send();
}

var papa = document.querySelector('#all_countdown_content');
function insertData(datas) {
    var obj = JSON.parse(datas);
    var href1 = "location.href ='event_filter_surfing2.php'";
    var href2 = "location.href ='event_create2.php'";
    for (let i = 0 ; i<obj.length ; i++) {
        let shell = document.createElement('div');
        shell.id = 'countdown_papa'+i ;
        shell.classList.add('countdown_timer_box');
        shell.innerHTML = '<h4 onclick="changeBG()">' + obj[i].apCount_name + '</h4>'+
                          '<p><span>預計日期</span>' + obj[i].apCount_date + '</p>'+
                          '<div id="countdown_box' + i + '"></div>' +
                          '<button onclick="'+href2+'">我要揪團</button>' +
                          '<button onclick="'+href1+'">查詢揪團</button>';
        papa.appendChild(shell);
    }
}

function count(datas){
    var obj = JSON.parse(datas);
    console.log(obj);
    $("#countdown_box0")
    .countdown(obj[0].apCount_datetime, function(event) {
        $(this).text(
        event.strftime('%DD %HH %MM %SS')
        );
    });
    $("#countdown_box1")
        .countdown(obj[1].apCount_datetime, function(event) {
            $(this).text(
            event.strftime('%DD %HH %MM %SS')
            );
    });
    $("#countdown_box2")
        .countdown(obj[2].apCount_datetime, function(event) {
            $(this).text(
            event.strftime('%DD %HH %MM %SS')
            );
    });
}

//倒數器click事件
function changeBG () {
    $('#countdown_papa0').click(function(){
        $('#meteor_shower_background').css('background-image','url("img/knowledge/background/3.jpg")').fadeOut(1);
        $('#meteor_shower_background').css('background-image','url("img/knowledge/background/3.jpg")').fadeIn(300);
        $(this).addClass('onclick_bg');
        $('.countdown_timer_box').not(this).removeClass('onclick_bg');
    });
    $('#countdown_papa1').click(function(){
        $('#meteor_shower_background').css('background-image','url("img/knowledge/background/2.jpg")').fadeOut(1);
        $('#meteor_shower_background').css('background-image','url("img/knowledge/background/2.jpg")').fadeIn(300);
        $(this).addClass('onclick_bg');
        $('.countdown_timer_box').not(this).removeClass('onclick_bg');
    });
    $('#countdown_papa2').click(function(){
        $('#meteor_shower_background').css('background-image','url("img/knowledge/background/1.jpg")').fadeOut(1);
        $('#meteor_shower_background').css('background-image','url("img/knowledge/background/1.jpg")').fadeIn(300);
        $(this).addClass('onclick_bg');
        $('.countdown_timer_box').not(this).removeClass('onclick_bg');
    });
}