'use client';

import { FC } from 'react';
import { useCart } from '../context/CartContext';
import styles from './CartCounter.module.css';

const CartCounter: FC = () => {
  const { getItemsCount } = useCart();
  const count = getItemsCount();

  if (count === 0) return null;

  return (
    <div className={styles.counter}>
      {count}
    </div>
  );
};

export default CartCounter; 