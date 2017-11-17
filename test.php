<?php
    $json_str = file_get_contents('php://input');
    $to = "healthykitchen.zt@gmail.com";
    $subject = "New Order!";
    $txt = $json_str;
    $headers = "From: healthykitchen.zt@gmail.com" . "\r\n";

    if(empty($json_str)) { 
      die;
    }
    var_dump( $json_str );    
    mail($to,$subject,$txt,$headers);