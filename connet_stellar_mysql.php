<?php
	$dsn = "mysql:host=127.0.0.1;dbname=stellar;port=3306;charset=utf8";
	$user = "root";
	$userPwd = "root";
	$someSet = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO($dsn, $user, $userPwd, $someSet);


	// $dsn = "mysql:host=140.115.236.72;dbname=cd103g2;port=3306;charset=utf8";
	// $user = "cd103g2";
	// $userPwd = "cd103g2";
	// $someSet = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
	// $pdo = new PDO($dsn, $user, $userPwd, $someSet);



?>