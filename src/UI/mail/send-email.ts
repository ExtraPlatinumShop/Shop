import { FormData } from "@/app/types/form";

export function sendEmail(data: FormData) {
  const apiEndpoint = 'https://api.telegram.org/bot6855648363:AAFRbWZ5tL_ESAb31ufDnwqHnNGOVzXRCWE/sendMessage';

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: -1002041235960,
      text: formatMessage(data),
      parse_mode: 'HTML'
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}

function formatMessage(data: FormData): string {
  return `
🛒 НОВЕ ЗАМОВЛЕННЯ
────────────────────
• Дата: <b>${new Date().toLocaleDateString()}</b>
• Ім'я: <b>${data.name}</b>
• Телефон: <b>${data.phone}</b>
• Email: <b>${data.email}</b>
• Місто: <b>${data.city}</b>
• Доставка: <b>${data.delivery}</b>
• Оплата: <b>${data.payment}</b>

📝 КОМЕНТАР:
<i>${data.comment || 'Немає коментаря'}</i>
────────────────────
  `;
}