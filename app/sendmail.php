<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';


$mail = new PHPMailer();
$mail ->ChartSet = 'UTF-8';
$mail ->setLanguage('phpmailer.lang-pl.php', 'phpmailer/language/');
$mail ->IsHTML(true);


$mail->setFrom('from@example.com');
$mail->addAddress('prestigio4040stud@gmail.com');
$mail->Subject = 'Zamówenie od klienta';


if (!$mail->send()) {
    &message = 'Błąd';
} else {
    &message = 'Zamówenie zostało wyslane do producenta!';
};

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response)
?>