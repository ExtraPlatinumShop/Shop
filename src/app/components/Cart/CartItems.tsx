'use client';

import { FC } from 'react';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import styles from './CartItems.module.css';
import { t } from 'i18next';
import { useRouter } from 'next/navigation';

const CartItems: FC = () => {
    const { items, updateQuantity, removeFromCart, getCartTotal } = useCart();
    const router = useRouter();
  if (items.length === 0) {
    return (
      <div className={styles.cartItems}>
        <div className={styles.emptyCart}>
          <h3>Ваша корзина порожня</h3>
          <p>Додайте товари до корзини, щоб зробити замовлення</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  return (
    <div className={styles.cartItems}>
      <div className={styles.itemsList}>
        {items.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <div onClick={() => router.push(`/Product/${item.id}`)} className={styles.itemImage}>
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
              <div className={styles.weightInfo}>Вміст: {item.capacity} {t(item.unit)}</div>
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
                <div className={styles.price}>{formatPrice(Number(item.price))} ₴</div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeButton}
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cartSummary}>
        <div className={styles.summaryRow}>
          <span>{items.length} товар на суму</span>
          <span>{formatPrice(getCartTotal())} ₴</span>
        </div>
        <div className={styles.summaryRow}>
          <strong>Разом:</strong>
          <strong>{formatPrice(getCartTotal())} ₴</strong>
        </div>
      </div>
    </div>
  );
};

export default CartItems; 