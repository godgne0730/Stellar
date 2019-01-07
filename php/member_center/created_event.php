<?php
    session_start();
    try {
        require_once('key.php');
        $mem_no = $_SESSION['mem_no'];
        $sql = "select * from event where mem_no = $mem_no and event_date > CURRENT_DATE()";
        $event = $pdo -> query ($sql);
        while($eventRow = $event->fetch( PDO::FETCH_ASSOC)){
        
?>      
        <div class="event_box">
            <h4><?php echo $eventRow["event_name"];?></h4>
            <div class="event_box_img">
                <img src="<?php echo $eventRow["event_img"];?>" alt="photo">
            </div>
            <div class="event_box_text">
                <div class="text_tr">
                    <span>揪團日</span>
                    <p><?php echo $eventRow['event_date'];?></p>
                </div>
                <div class="text_tr">
                    <span>揪團截止日</span>
                    <p>
                        <?php echo $eventRow['event_end'];?></p>
                </div>
                <div class="text_tr">
                    <button onclick=" self.location.href= 'event_detail_signup2.php?event_name=<?php echo $eventRow['event_name'];?>&event_date=<?php echo $eventRow['event_date'];?>&event_info=<?php echo $eventRow['event_info'];?>' ">查看</button>
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