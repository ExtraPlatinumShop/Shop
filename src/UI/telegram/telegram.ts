const baseUrl =
  "http://api.telegram.org/bot6855648363:AAFRbWZ5tL_ESAb31ufDnwqHnNGOVzXRCWE/";
const CHAT_ID = "-1002041235960";

export const sendMessage = async (messege: string): Promise<void> => {
  const url: string = `${baseUrl}sendMessage?chat_id=${CHAT_ID}&text=${messege}`;
  const response = await fetch(url);
  
};

export function sendOrder(name: string, email: string, message: string) {
  sendMessage(`
 Замовлення\n
  Ім'я: ${name}\n
  Пошта: ${email}\n
  Повідомлення:${message}
  `);
}
export function sendCoop(name: string, email: string, message: string) {
  sendMessage(`
  Пропозиція СПІВПРАТЦІ\n
  Ім'я: ${name}\n
  Пошта: ${email}\n
  Повідомлення:${message}
  `);
}
