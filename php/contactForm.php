<?php

  if (isset($_POST['submit'])){

    $name = $_REQUEST['name'];
    $phone = $_REQUEST['phone'];
    $mailFrom = $_REQUEST['email'];
    $subject = $_REQUEST['messageTitle'];
    $message = $_REQUEST['message'];

    $mailTo = "workstation293@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have recived an e-mail from ".$name.". \n\n".$message;
    
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");

  }