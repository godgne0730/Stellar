
<?php

try {
	$dsn = "mysql:host=localhost;port=3306;dbname=cd103g2;charset=utf8";
	$user = "cd103g2";
	$password = "cd103g2";
	$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO($dsn, $user, $password,$options);

} catch (PDOException $e) {
	echo "例外行號 : ", $e->getLine(), "<br>";
	echo "有狀況 : ", $e->getMessage(), "<br>";	
}
?>      
