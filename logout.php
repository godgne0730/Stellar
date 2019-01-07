<?php
	session_start();
	unset($_SESSION['mem_nickName']);
	echo '<meta http-equiv=REFRESH CONTENT=0;url=index.php>';
?>