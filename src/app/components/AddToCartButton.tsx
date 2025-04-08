'use client';

import { FC, useState } from 'react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types/cart';
import styles from './AddToCartButton.module.css';

interface AddToCartButtonProps {
  item: Omit<CartItem, 'quantity'>;
  className?: string;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ item, className }) => {
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className={styles.buttonContainer}>
      {showNotification && (
        <div className={styles.notification}>
          Товар додано до корзини!
        </div>
      )}
      <button
        onClick={handleAddToCart}
        className={`${styles.addToCart} ${className || ''}`}
      >
        Додати до корзини
      </button>
    </div>
  );
};

export default AddToCartButton; 