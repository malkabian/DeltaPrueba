<?php 

$Name = $_POST['name'];
$Mail = $_POST['email'];
$Message = $_POST['message'];

$message = "This message was sent by " . $Name . " \r\n ";
$message .= "Your email is " . $Mail . " \r\n ";
$message .= "Message " . $_POST['message'] . " \r\n ";

$for = 'rodolfodelgadosantiago@gmail.com';
$subject = 'Contact form message.';

$headers = "From: " . $Mail . "\r\n";
mail($for, $subject, $message, $headers);
header('location:success.html');

?>