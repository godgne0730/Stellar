<?php
    session_start();
    try {
        require_once('key.php');
        $mem_no = $_SESSION['mem_no'];
        $new_memImg = $_FILES["upload_new_photo"];

        if( $_FILES["upload_new_photo"]['error'] == 'UPLOAD_ERR_OK'){
        
            $dir = "php_upload_pic/";
            if( file_exists($dir) == false){
                mkdir($dir);
            }
            $from = $_FILES["upload_new_photo"]['tmp_name'];
            $to = $dir . $_FILES["upload_new_photo"]['name'];
            // array_push($arr,$to);
            copy($from, $to);
        }
        $sql = "UPDATE member SET mem_img = :new_memImg where mem_no = :mem_no";
        $updateData = $pdo -> prepare($sql);
        $updateData -> bindValue(':new_memImg',$to);
        $updateData -> bindValue(':mem_no',$mem_no);
        $updateData -> execute();

        echo json_encode($to);



    } catch(PDOException $e) {
        echo 'error:', $e -> getMessage();
		echo 'line:', $e -> getLine();
    }
?>