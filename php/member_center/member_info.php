<?php
    session_start();
    try {
        require_once('key.php');
        $mem_no = $_SESSION['mem_no'];
        $sql = "select * from member where mem_no = $mem_no";
        $member = $pdo -> query ($sql);
        while($memRow = $member->fetch( PDO::FETCH_ASSOC)){
        
?>      
        <div class="info_img_box">
            <div class="circle_box">
                <img src="<?php echo "php/member_center/".$memRow["mem_img"];?>" alt="head">
            </div>
        </div>
        <div class="info_text_box" id="info_text_content">
            <div class="text_tr">
                <span>帳號</span>
                <p><?php echo $memRow["mem_id"];?></p>
            </div>
            <div class="text_tr">
                <span>暱稱</span>
                <p><?php echo $memRow["mem_nickName"];?></p>
            </div>
            <div class="text_tr">
                <span>E-Mail</span>
                <p><?php echo $memRow["mem_email"];?></p>
            </div>
            <div class="text_tr">
                <span>被檢舉次數</span>
                <p><?php echo $memRow["mem_repTime"];?></p>
            </div>
            <div id="pswContent"><?php echo $memRow["mem_psw"];?></div>
        </div>
<?php
    }
    } catch(PDOException $e) {
        echo 'error:', $e -> getMessage();
		echo 'line:', $e -> getLine();
    }
?>