//圖片位置儲存陣列
var imgSrc = [];
imgSrc.length = 12;
imgSrc[0] = "img/knowledge/1.png";
imgSrc[1] = "img/knowledge/2.png";
imgSrc[2] = "img/knowledge/3.png";
imgSrc[3] = "img/knowledge/4.png";
imgSrc[4] = "img/knowledge/5.png";
imgSrc[5] = "img/knowledge/6.png";
imgSrc[6] = "img/knowledge/7.png";
imgSrc[7] = "img/knowledge/8.png";
imgSrc[8] = "img/knowledge/9.png";
imgSrc[9] = "img/knowledge/10.png";
imgSrc[10] = "img/knowledge/11.png";
imgSrc[11] = "img/knowledge/12.png";

//星座日期儲存陣列
var date = [];
date.length = 12;
date[0] = "1月21日~2月19日";
date[1] = "2月20日~3月20日";
date[2] = "3月21日~4月20日";
date[3] = "4月21日~5月21日";
date[4] = "5月22日~6月21日";
date[5] = "6月22日~7月22日";
date[6] = "7月23日~8月23日";
date[7] = "8月24日~9月23日";
date[8] = "9月24日~10月23日";
date[9] = "10月24日~11月22日";
date[10] = "11月23日~12月21日";
date[11] = "12月22日~1月20日";


//星座標題儲存陣列
var title = [];
title.length = 12;
title[0] = "Aquarius 水瓶座";
title[1] = "Pisces 雙魚座";
title[2] = "Aries 白羊座";
title[3] = "Taurus 金牛座";
title[4] = "Gemini 雙子座";
title[5] = "Cancer 巨蟹座";
title[6] = "Leo 獅子座";
title[7] = "Virgo 處女座";
title[8] = "Libra 天秤座";
title[9] = "Scorpio 天蠍座";
title[10] = "Sagittarius 射手座";
title[11] = "Capricorn 摩羯座";

//星座內容儲存陣列
var info = [];
title.length = 12;
info[0] = "樂於助人，充滿人道精神，誠實善良，創意十足，個性獨立，擁有理想的智慧。";
info[1] = "想像力豐富，善解人意，心地仁慈，捨己為人不自私，直覺力強，懂得包容。";
info[2] = "喜歡冒險，精力旺盛，樂觀進取有自信，熱情有活力，勇於接受新觀念。";
info[3] = "耐性十足，一往情深，腳踏實地，做事有計劃，能堅持到底，擇善固執。";
info[4] = "適應性強，多才多藝，善於溝通，懂得隨機應變， 充滿生命力，活潑可愛。";
info[5] = "感情真摯深切，想像力豐富，有包容力，直覺敏銳，善解人意，有同情心。";
info[6] = "對人慷慨大方，熱情開朗樂觀，有領導能力，具有激勵人心的氣質，誠懇正直。";
info[7] = "謙遜不誇大，腳踏實地，事事謹慎小心，勤奮努力有耐性，守本分靠得住。";
info[8] = "有外交手腕，天生的優雅風采，浪漫的戀愛高手，適應力強，對美感有鑒賞力。";
info[9] = "對決定的事有執行力，說服力強，直覺敏銳，不畏挫折堅持到底，充滿激情。";
info[10] = "天性樂觀，熱愛自由，對人生充滿理想，豐富的幽默感，正直坦率，待人友善。";
info[11] = "有實際的人生觀，做事腳踏實地，有遠大抱負，意志力強不容易受影響，處處謹慎。";

//初始讀入值
var i = 1 ;
var x = i - 1 ;
var y = i + 1 ;
$(window).on('load',function(){
    $('#banner_left_img').attr('src',imgSrc[x]);
    $('#banner_center_img').attr('src',imgSrc[i]);
    $('#banner_right_img').attr('src',imgSrc[y]);
    $('.horoscope_date').text(date[i]);
    $('.horoscope_title').text(title[i]);
    $('.horoscope_info').text(info[i]);
});

//向左點擊事件
$('#left_arrow').on('click',function(){
    y = i;
    i = x;
    x = x - 1;
    if ( x < 0 ) {
        x = 11;
    }
    if ( i < 0 ) {
        i = 11;
    }
    if ( y < 0 ) {
        y = 11;
    }
    $('#banner_left_img').attr('src',imgSrc[x]).fadeOut(1);
    $('#banner_center_img').attr('src',imgSrc[i]).fadeOut(1);
    $('#banner_right_img').attr('src',imgSrc[y]).fadeOut(1);
    $('.horoscope_date').text(date[i]).fadeOut(1);
    $('.horoscope_title').text(title[i]).fadeOut(1);
    $('.horoscope_info').text(info[i]).fadeOut(1);
    $('#banner_left_img').attr('src',imgSrc[x]).fadeIn(500);
    $('#banner_center_img').attr('src',imgSrc[i]).fadeIn(500);
    $('#banner_right_img').attr('src',imgSrc[y]).fadeIn(500);
    $('.horoscope_date').text(date[i]).fadeIn(800);
    $('.horoscope_title').text(title[i]).fadeIn(600);
    $('.horoscope_info').text(info[i]).fadeIn(1000);
});

//向右點擊事件
$('#right_arrow').click(function(){
    x = i;
    i = y;
    y = y + 1;
    if( i > 11 ) {
        i = 0;
    } 
    if( x > 11 ) {
        x = 0;
    }
    if( y > 11) {
        y = 0;
    }
    $('#banner_left_img').attr('src',imgSrc[x]).fadeOut(1);
    $('#banner_center_img').attr('src',imgSrc[i]).fadeOut(1);
    $('#banner_right_img').attr('src',imgSrc[y]).fadeOut(1);
    $('.horoscope_date').text(date[i]).fadeOut(1);
    $('.horoscope_title').text(title[i]).fadeOut(1);
    $('.horoscope_info').text(info[i]).fadeOut(1);
    $('#banner_left_img').attr('src',imgSrc[x]).fadeIn(500);
    $('#banner_center_img').attr('src',imgSrc[i]).fadeIn(500);
    $('#banner_right_img').attr('src',imgSrc[y]).fadeIn(500);
    $('.horoscope_date').text(date[i]).fadeIn(800);
    $('.horoscope_title').text(title[i]).fadeIn(600);
    $('.horoscope_info').text(info[i]).fadeIn(1000);
});
