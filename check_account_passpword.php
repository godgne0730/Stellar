<?php
	session_start();

	try {
		$userAc = $_POST["user_account"];
		$userPw = $_POST["user_password"];

		require_once('connet_stellar_mysql.php');
		
		$sql = "select * from member where (mem_id = :ac and mem_psw = :pw)";
		$getData = $pdo -> prepare( $sql );
		$getData -> bindValue( ':ac', $userAc);
		$getData -> bindValue( ':pw', $userPw);
		$getData -> execute();

		$showData = $getData -> fetch(PDO::FETCH_ASSOC);



		if( $getData->rowCount() == 1 ) {
			$_SESSION["mem_nickName"] = $showData["mem_nickName"];

			if ( isset($_SESSION["pswErrorMsg"]) ) {
				unset($_SESSION["pswErrorMsg"]);
			}


			 echo '<meta http-equiv=REFRESH CONTENT=0;url=index.php>';

			 // header("Location: stellar.php");
		} else {
			$_SESSION["pswErrorMsg"] = "帳號或密碼錯誤";
			echo '<meta http-equiv=REFRESH CONTENT=0;url=index.php>';
		}


	} catch(PDOException $e) {
		echo 'error:', $e -> getMessage();
		echo 'line:', $e -> getLine();
	}
	

?>