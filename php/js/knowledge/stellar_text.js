var stellarTitle = [];
stellarTitle.length = 5;
stellarTitle[0] = "『M』型星";
stellarTitle[1] = "『G』型星";
stellarTitle[2] = "『F』型星";
stellarTitle[3] = "『A』型星";
stellarTitle[4] = "『O』型星";

var stellarInfo = [];
stellarInfo.length = 5;
stellarInfo[0] = "溫度低於3,500K，有金屬、分子及氧化物的譜線，氧化鈦(TiO)的譜線成為最主要的譜線。如M0已有很強的分子帶，尤其是氧化銻、鈣原子的譜線強烈，紅色區呈現連續光譜；M5鈣原子的譜線很強，氧化銻的強度超過鈣。";
stellarInfo[1] = "溫度在5,000至6,000K之間，有游離的金屬、鈣譜線及部份的金屬譜線，氫原子的譜線更為微弱，分子譜線(CH)已經出現。如G0譜線以中性金屬線為主，鈣的離子線達到最強，氫氧根(G帶)的吸收線很強。";
stellarInfo[2] = "溫度在6,000至7,500K之間，有離子化的金屬譜線，氫的譜線轉趨微弱但仍很明顯，鐵、鉻等自然態的金屬譜線開始出現。如F0的鈣離子線強烈，氫的譜線雖已減弱，但中性氫原子譜線與一階金屬離子線都很明顯。";
stellarInfo[3] = "溫度在7,500至11,000K之間，光譜以氫原子的譜線最強烈，矽、鎂、鐵、鈣、鈦等都為游離的譜線，但金屬的譜線很微弱。如A0已經沒有氦的譜線，有微弱的鎂與矽的離子譜線，也有鈣離子的譜線。";
stellarInfo[4] = "溫度高於25,000K，有游離的氦光譜，氫的譜線不明顯，在紫外線區的連續光譜強烈。多數的原子都呈現高游離狀態，如氮失去兩個電子，矽失去三個電子。";

var i = 0;
$(window).ready(function(){
    $('#stellar_title').text(stellarTitle[i]);
    $('#stellar_introduction').text(stellarInfo[i]);
});

function opacity() {
    $('#stellar_title').css('transition','.5s');
    $('#stellar_title').css('opacity','0');
    $('#stellar_#stellar_introduction').css('transition','.5s');
    $('#stellar_introduction').css('opacity','0');
}
function loop() {
    i = i + 1;
    if( i > 4 ){
        i = 0;
    }
    $('#stellar_title').css('opacity','1');
    $('#stellar_introduction').css('opacity','1');
    $('#stellar_title').text(stellarTitle[i]);
    $('#stellar_introduction').text(stellarInfo[i]);
}
$(function() {
    setInterval(opacity, 5000);
    setInterval(loop, 5200);
});