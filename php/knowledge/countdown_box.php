<?php
    try {
        // $dsn = "mysql:host=localhost;dbname=stellar;port=3306;charset=utf8";
        // $user = "root";
        // $userPwd = "root";
        // $option = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
        // $pdo = new PDO($dsn, $user, $userPwd, $option);
        require_once('key.php');
        $sql = "select * from apCount ";
        $apCount = $pdo -> query ($sql);
        $data = array();
        while($apRow = $apCount->fetch( PDO::FETCH_ASSOC)){
            $data[] = $apRow;
        }

        print_r(json_encode($data));

    } catch(PDOException $e) {
        echo 'error:', $e -> getMessage();
		echo 'line:', $e -> getLine();
    }
?>