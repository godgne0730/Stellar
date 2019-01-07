<?php
    session_start();
    try {
        require_once('key.php');
        $mem_no = $_SESSION['mem_no'];
        $sql = "UPDATE member SET mem_nickName = :mem_nickName, mem_email = :mem_email, mem_psw = :mem_psw where mem_no = :mem_no";
        $updateData = $pdo -> prepare($sql);
        $updateData -> bindValue(':mem_no',$mem_no);
        $updateData -> bindValue(':mem_nickName',$_POST['wtf']);
        $updateData -> bindValue(':mem_email',$_POST['email']);
        $updateData -> bindValue(':mem_psw',$_POST['newPsw']);
        $updateData -> execute();

        echo json_encode($_POST['wtf']);
        echo json_encode($_POST['email']);
        echo json_encode($_POST['newPsw']);
    } catch(PDOException $e) {
        echo 'error:', $e -> getMessage();
		echo 'line:', $e -> getLine();
    }
?>