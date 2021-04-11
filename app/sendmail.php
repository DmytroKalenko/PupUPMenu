<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';


$mail = new PHPMailer();
$mail ->CharSet = 'UTF-8';
$mail ->setLanguage('phpmailer.lang-pl.php', 'phpmailer/language/');
$mail ->IsHTML(true);


$mail->setFrom('prestigio4040stud@gmail.com');
$mail->addAddress('sigajif295@art2427.com');
$mail->Subject = 'Zamówenie od klienta';

$body = '<h1> Zamówenie od klienta : </h1> '

if(trim(!empty($_POST['radio']))){
    $body.= '<p><strong>Rozmiar to </strong> '.$_POST['____'].'</p>';
}
if(trim(!empty($_POST['select']))){
    $body.= '<p><strong>Color to </strong> '.$_POST['____'].'</p>';
}



if (!$mail->send()) {
    $message = 'Błąd wysyłki danych';
} else {
    $message = 'Zamówenie zostało wyslane do producenta!';
};

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response)

?>