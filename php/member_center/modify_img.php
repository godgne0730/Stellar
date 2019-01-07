<?php
    session_start();
    try {
        require_once('key.php');
        $mem_no = $_SESSION['mem_no'];
        $sql = "select * from member where mem_no = $mem_no";
        $member = $pdo -> query ($sql);
        while($memRow = $member->fetch( PDO::FETCH_ASSOC)){
        
?>      
    <?php echo "php/member_center/".$memRow["mem_img"]; ?>    
<?php
    }
    } catch(PDOException $e) {
        echo 'error:', $e -> getMessage();
		echo 'line:', $e -> getLine();
    }
?>