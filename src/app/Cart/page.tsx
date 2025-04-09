"use client";

import { FC } from 'react';
import CartForm from '../components/Cart/CartForm';
import CartItems from '../components/Cart/CartItems';
import styles from './Cart.module.css';

const Cart: FC = () => {
  return (
    <div className={styles.cartPage}>
      <h1>Оформлення замовлення</h1>
      <div className={styles.cartContent}>
        <CartForm />
        <CartItems />
      </div>
    </div>
  );
};

export default Cart;
