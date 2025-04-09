import { t } from 'i18next';
import { sendMessage } from './telegram';
import { TypeCard } from "@/app/Product/[productid]/page";

export type CartOrderData = {

  name: string;
  phone: string;
  email: string;
  city: string;
  delivery: string;
  payment: string;
  comment?: string;
  noCall: boolean;
};

export const sendCartOrder = async (data: CartOrderData, products: TypeCard[], countEachProduct: any) => {
  const { name, phone, email, city, delivery, payment, comment, noCall } = data;
  
  // Отримання поточної дати та часу
  const now = new Date();
  const formattedDate = now.toLocaleString('uk-UA', {
    year: 'numeric', month: 'long', day: 'numeric', 
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });

  // Перетворення значень на більш читабельні
  const deliveryText = getDeliveryText(delivery);
  const paymentText = getPaymentText(payment);
  
  let totalPrice = 0;
  
  const productList = products.map((product) => {
    const count = countEachProduct[product.name] || 0;
    const productTotalPrice = product.price * count;
    totalPrice += productTotalPrice;
    return `• ${product.name}:<b>${product.capacity} ${t(product.unit)}</b>
    Кількість: <b>${count}</b>
    Ціна: <b>${product.price} ₴</b>
    Всього: <b>${productTotalPrice} ₴</b>
    `;
  }).join('\n');
  
  await sendMessage(`
<b>🛒 НОВЕ ЗАМОВЛЕННЯ</b>
───────────────────────
• Дата: <b>${formattedDate}</b>

<b>👤 ІНФОРМАЦІЯ ПРО КЛІЄНТА:</b>
• Ім'я: <b>${name}</b>
• Телефон: <b>${phone}</b>
• Пошта: <b>${email}</b>
• Місто: <b>${city}</b>
• Не телефонувати: <b>${noCall ? 'Так' : 'Ні'}</b>

<b>📦 ДЕТАЛІ ДОСТАВКИ:</b>
• Спосіб доставки: <b>${deliveryText}</b>
• Спосіб оплати: <b>${paymentText}</b>

<b>📜 ПЕРЕЛІК ТОВАРІВ:</b>
${productList}

<b>Загальна вартість: ${totalPrice} ₴</b>

<b>📝 КОМЕНТАР:</b>
<i>${comment ? comment : 'Не вказано'}</i>
───────────────────────
  `);
};

// Допоміжні функції для перетворення значень
function getDeliveryText(delivery: string): string {
  switch (delivery) {
    case 'nova-poshta': return 'Нова Пошта';
    case 'ukr-poshta': return 'Укрпошта';
    case 'self-pickup': return 'Самовивіз';
    default: return delivery;
  }
}

function getPaymentText(payment: string): string {
  switch (payment) {
    case 'card': return 'Оплата картою';
    case 'cash': return 'Оплата при отриманні';
    default: return payment;
  }
} 