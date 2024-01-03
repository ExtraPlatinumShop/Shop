import axios from 'axios';

const BOT_TOKEN = '6855648363:AAFRbWZ5tL_ESAb31ufDnwqHnNGOVzXRCWE'; // Замініть на ваш токен бота
const CHAT_ID = '-1002041235960'; // Замініть на ідентифікатор чату, куди ви хочете відправити повідомлення

// Функція для відправки повідомлення на Telegram
async function sendTelegramMessage(message: string): Promise<void> {
  try {
    const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const params = {
      chat_id: CHAT_ID,
      text: message,
    };

    await axios.post(apiUrl, params);
    console.log('Повідомлення відправлено успішно.');
  } catch (error) {
    console.error('Помилка під час відправки повідомлення на Telegram:', error.message);
  }
}

// Приклад використання
const messageToSend = 'Привіт, це моє перше повідомлення через бота!';
sendTelegramMessage(messageToSend);
