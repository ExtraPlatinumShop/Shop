'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import styles from './CartItems.module.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  weight: number;
}

const CartItems: FC = () => {
  // This would typically come from a global cart state management system
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Рідке мило з антибактеріальною дією та екстрактом Алое',
      price: 290.00,
      quantity: 1,
      image: '/soap.png', // Replace with actual image path
      weight: 2
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className={styles.cartItems}>
      <div className={styles.itemsList}>
        {items.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.itemImage}>
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                objectFit="contain"
              />
            </div>
            <div className={styles.itemDetails}>
              <h3>{item.name}</h3>
              <div className={styles.weightInfo}>Вага: {item.weight} кг</div>
              <div className={styles.quantityControls}>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className={styles.quantityButton}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className={styles.quantityButton}
                >
                  +
                </button>
                <div className={styles.price}>{item.price.toFixed(2)} ₴</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cartSummary}>
        <div className={styles.summaryRow}>
          <span>{items.length} товар на суму</span>
          <span>{calculateTotal().toFixed(2)} ₴</span>
        </div>
        <div className={styles.summaryRow}>
          <strong>Разом:</strong>
          <strong>{calculateTotal().toFixed(2)} ₴</strong>
        </div>
      </div>
    </div>
  );
};

export default CartItems; 