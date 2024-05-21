<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


if (isset($_POST['submit'])) {
   
    $name = $_POST['name'];
    $email = $_POST['email'];
    // $phone_number = $_POST['phone_number']; 
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    
    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    
    
    $mail = new PHPMailer(true);
    
    try {
        
        
        $mail->isSMTP(); 
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;              
        $mail->Username   = 'testalpha159@gmail.com';      
        $mail->Password   = 'kehx jrpm xcye hglq';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
        $mail->Port       = 465; 
    
        
        $mail->setFrom('testalpha159@gmail.com', 'Mailer');
        $mail->addAddress('testalpha159@gmail.com', 'Joe User'); 
        
        
        $mail->isHTML(true); 
        $mail->Subject = 'Here is the subject';
        $mail->Body    = "Sender Name: $name <br> Sender Email: $email <br> Subject: $subject  <br> Message: $message";
    
        
        $mail->send();
    } catch (Exception $e) {
        echo '<script>alert("Message not sent "); window.location.href = "contact.html";</script>';    }
}
echo'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Wedding Stellars</title>
    <meta http-equiv="refresh" content="3;url=home.html" />
  </head>
  <body style="background-color: teal;  text-align: center; color: #ffffff;">
    <h1>Thank you for Visit</h1>
  </body>
</html>
';
?>
