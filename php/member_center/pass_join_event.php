<?php
    session_start();
    try {
        require_once('key.php');
        $mem_no = $_SESSION['mem_no'];
        $sql = "select * from event where event_joinMem like '%$mem_no%' and event_date < CURRENT_DATE()";
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
                    <button onclick=" self.location.href= 'event_detail_signup2.php?event_name=<?php echo $joinRow['event_name'];?>&event_date=<?php echo $joinRow['event_date'];?>&event_info=<?php echo $joinRow['event_info'];?>' "> 瀏覽資訊</button>
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