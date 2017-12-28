<?php

// This two steps to help avoid spam; found it online hope it works
$headers .= "Message-ID: <".time()." TheSystem@".$_SERVER['SERVER_NAME'].">\r\n";
$headers .= "X-Mailer: PHP v".phpversion()."\r\n";


$name=$_Post['name'];
$email=$_Post['email'];
$comments=$_Post['comments'];
$to="rod_rahmjoo@yahoo.com";
$headers="From:" .$email;
$txt="You have recieved an email from " .$name;
$subject="New Message";

$emailform=mail ($to, $subject, $comments, "From: " . $name);

if($emailform){
echo "Thank You For Your Input";
}
else {
echo "ERROR";
}
?>
