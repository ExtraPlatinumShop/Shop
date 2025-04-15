import { TypeCard } from "@/app/Product/[productid]/page";

const baseUrl =
  "http://api.telegram.org/bot6855648363:AAFRbWZ5tL_ESAb31ufDnwqHnNGOVzXRCWE/";
const CHAT_ID = "-1002041235960";

export const sendMessage = async (message: string): Promise<void> => {
  const params = new URLSearchParams({
    chat_id: CHAT_ID,
    text: message,
    parse_mode: 'HTML'
  });
  
  const url = `${baseUrl}sendMessage?${params.toString()}`;
  const response = await fetch(url);
  const data = await response.json();
  
  if (!response.ok) {
    console.error('Помилка при відправці повідомлення в Telegram:', data);
    throw new Error('Не вдалося відправити повідомлення в Telegram');
  }
};

export function sendOrder(
  name: string,
  email: string,
  message: string,
  products: TypeCard[],
  countEachProduct: any
) {
  sendMessage(`
 Замовлення

  Ім'я: ${name}
  Пошта: ${email}
  Повідомлення:${message}
${products.map((el) => {
  el.name;
  el.name === countEachProduct.name ? countEachProduct.count : "";
})}
  `);
}
export function sendCoop(name: string, email: string, message: string, phone: string) {
  sendMessage(`
  Пропозиція СПІВПРАТЦІ

  Ім'я: ${name}
  Телефон: ${phone}
  Пошта: ${email}
  Повідомлення:${message}
  `);
}
