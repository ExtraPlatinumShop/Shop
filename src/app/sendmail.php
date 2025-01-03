<?php

if (isset(/* $_POST['name'], */ $_POST['email'], $_POST['message'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    require_once('../../constants/contacts.php');
    $to = COMPANY_CONTACTS['EMAIL']; // Using the constant
    $subject = 'Сообщение с сайта';
    $body = "Имя: \nEmail: $email\nСообщение: $message";
    $headers = 'From: noreply@example.com' . "\r\n" . 'Reply-To: noreply@example.com';

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['error' => 'Ошибка отправки письма']);
    }
} else {
    echo json_encode(['error' => 'Неправильные данные']);
}