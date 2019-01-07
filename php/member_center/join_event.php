<?php
    session_start();
    try {
        require_once('key.php');
        $mem_no = $_SESSION['mem_no'];
        $sql = "select * from event where event_joinMem like '%$mem_no%' and event_date > CURRENT_DATE()";
        $join = $pdo -> query ($sql);
        while($joinRow = $join->fetch( PDO::FETCH_ASSOC)){
        
?>      
        <div class="event_box">
            <h4><?php echo $joinRow["event_name"];?></h4>
            <div class="event_box_img">
                <img src="<?php echo $joinRow["event_img"];?>" alt="photo">
            </div>
            <div class="event_box_text">
                <div class="text_tr">
                    <span>揪團日</span>
                    <p>
                        <?php echo $joinRow['event_date'];?>
                    </p>
                </div>
                <div class="text_tr">
                    <span>揪團報名截止日</span>
                    <p><?php echo $joinRow['event_end'];?></p>
                </div>
                <div class="text_tr">
                    <button onclick="$(this).parent().parent().parent().fadeOut(500);">取消</button>
                </div>
            </div>
        </div>
<?php
    }
    } catch(PDOException $e) {
        echo 'error:', $e -> getMessage();
		echo 'line:', $e -> getLine();
    }
?>