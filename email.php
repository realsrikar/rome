<?php

// This two steps to help avoid spam; found it online hope it works
$headers = "Message-ID: <".time()." TheSystem@".$_SERVER['SERVER_NAME'].">\r\n";
$headers .= "X-Mailer: PHP v".phpversion()."\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";


$name=$_POST['name'];
$email=$_POST['email'];
$comments=$_POST['comments'];
$to="romanthemes@gmail.com";
$headers.="From: " .$email;
$txt="You have recieved an email from " .$name;
$subject="New Message";

$emailform=mail($to, $subject, $comments, $headers);

if($emailform){
echo "Thank You For Your Input";
}
else {
echo "ERROR";
}
?>
