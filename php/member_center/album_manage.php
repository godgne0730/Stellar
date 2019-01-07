<?php
    session_start();
    try {
        require_once('key.php');
        $mem_no = $_SESSION['mem_no'];
        $sql = "select * from album where mem_no = $mem_no";
        $album = $pdo -> query ($sql);
        while($albumRow = $album->fetch( PDO::FETCH_ASSOC)){
?>      
        <div class="album_box">
            <h4><?php echo $albumRow["alb_albumName"];?></h4>
            <span>
                <?php echo $albumRow["alb_time"];?>
            </span>
            <div class="album_img_box">
                <img src="<?php echo "php/".$albumRow["alb_img"]?>" alt="">
            </div>
            <p class="album_text_box"><?php echo $albumRow["alb_desc"]?></p>
            <div class="album_btn_box">
                <button onclick=" location.href = 'album_surfing.php ' ">查看</button>
                <button onclick="$(this).parent().parent().fadeOut(500);">刪除</button>
            </div>
        </div>
<?php
        }
    } catch(PDOException $e) {
        echo 'error:', $e -> getMessage();
		echo 'line:', $e -> getLine();
    }
?>