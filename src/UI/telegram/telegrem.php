<?php
$name = $_POST['name'];
$message = $_POST['message'];
$email = $_POST['email'];
$token = "6855648363:AAFRbWZ5tL_ESAb31ufDnwqHnNGOVzXRCWE";
$chat_id = "-1002041235960";
$arr = array(
    "Замовник =>"=>$name,
    "Номер телефону =>"=>$message,
    "Email =>"=>$email,
);
for ($arr as $key =>$value) { 
    $txt = "<b>".$key."</b ".$value."%0A";

}
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if($sendToTelegram){
    header('Location : success.html');
}else{
    echo "Error"
}