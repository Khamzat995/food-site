<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$form_subject = trim($_POST["form_subject"]);

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$jsonText = $_POST['Товары'];
$myArray = json_decode($jsonText, true);

$prod = '';

foreach ($myArray as $key => $value) {
		$title = $value["title"];
		$counter = $value["counter"];
	    $price = $value["price"];
	    $prod = "
			<tr>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$title</b></td>
				<td style='padding: 10px; width: 110px; display: inline-block; border: #e9e9e9 1px solid;'>количество <b> $counter</b></td>
				<td style='padding: 10px; width: 100px; display: inline-block; border: #e9e9e9 1px solid;'>по <b> $price</b></td>
			</tr>
			";
	}

    $c = true;
    $message = '';
    foreach ( $_POST as $key => $value ) {
        if ( $value != "" && $key != "form_subject"  && $key != "Товары") {
            if (is_array($value)) {
                $val_text = '';
                foreach ($value as $val) {
                    if ($val && $val != '') {
                        $val_text .= ($val_text==''?'':', ').$val;
                    }
                }
                $value = $val_text;
            }
            $message .= "
            " . ( ($c = !$c) ? '<tr>':'<tr>' ) . "
            <td style='padding: 10px; width: auto;'><b>$key:</b></td>
            <td style='padding: 10px;width: 100%;'>$value</td>
            </tr>
            ";
        }
    }
    $message = "<table style='width: 50%;'>$message   $prod</table>";
      
/* $email = $_POST['user_email']; */

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'russia.07@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'C4kPy90eb9zw9ZVcLCt4'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465 ; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('russia.07@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('kuduzovkhamzat@gmail.com');     // Кому будет уходить письмо 
$mail->addAddress('russia.07@mail.ru');               // Name is optional

// Тело письма

$body = $message; /* или $mail->Body = $message;*/
// $mail->isHTML(true);  это если прям верстка
$mail->msgHTML($body); // Set email format to HTML

// Тема письма
$mail->Subject = 'Заявка c сайта "Национальные блюда на заказ"';
/* $mail->Body    = '' .$name . ' оставил(а) заявку, его(её) телефон ' .$phone. '<br>Почта этого пользователя: ' .$email; */
/* $mail->Body    = '' .$name . ' оставил(а) заявку, его(её) телефон ' .$phone;
$mail->AltBody = ''; */

// Приложения
if ($_FILES){
	foreach ( $_FILES['file']['tmp_name'] as $key => $value ) {
		$mail->addAttachment($value, $_FILES['file']['name'][$key]);
	}
}
/*$mail->send();*/

 if($mail->send()) {
    header('Location: /thank-you.html');   
} else {
    echo 'Error';
} 
?>