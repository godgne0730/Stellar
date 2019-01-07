<?php

	$newAc = $_POST["new_account"];
	$newPw = $_POST["new_password"];
	$newNickName = $_POST["new_nickname"];
	$newEmail = $_POST["new_email"];


	try {
		require_once('connet_stellar_mysql.php');
		
		$sql = "INSERT INTO `member` (`mem_no`, `mem_name`, `mem_id`, `mem_psw`, `mem_nickName`, `mem_img`, `mem_email`, `mem_phone`, `mem_close`, `mem_repTime`, `mem_msgCount`) VALUES (NULL, NULL, :ac, :pw, :nk, NULL, :em, NULL, NULL, NULL, NULL);";
		$getData = $pdo -> prepare( $sql );
		$getData -> bindValue(':ac', $newAc);
		$getData -> bindValue(':pw', $newPw);
		$getData -> bindValue(':nk', $newNickName);
		$getData -> bindValue(':em', $newEmail);
		$getData -> execute();



		// $_SESSION["mem_nickName"] = $showData["mem_nickName"];
		// require 'login_t.php';



	} catch(PDOException $e) {
		echo 'error:', $e -> getMessage();
		echo 'line:', $e -> getLine();
	}


?>