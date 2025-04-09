'use client';

import { FC, useState, useContext, useEffect } from 'react';
import styles from './CartForm.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { sendCartOrder, CartOrderData } from '@/UI/telegram/cartOrder';
import { TypeCard } from '@/app/Product/[productid]/page';
import { useCart } from '../../context/CartContext';
import { CartItem } from '../../types/cart';
import { useRouter } from 'next/navigation';


const getProductCounts = (products: TypeCard[]): Record<string, number> => {
  return products.reduce((counts, product) => {
    counts[product.name] = product.quantity;
    return counts;
  }, {} as Record<string, number>);
};

const convertToTypeCard = (cartItem: CartItem): TypeCard => {
  return {
    id: cartItem.id,
    name: cartItem.name,
    price: cartItem.price,
    img: cartItem.image,
    text: '',
    capacity: `${cartItem.capacity}`,
    albom: [],
    albomName: [],
    unit: cartItem.unit,
    weight: cartItem.weight,
    quantity: cartItem.quantity
  };
};

const CartForm: FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderData, setOrderData] = useState<CartOrderData | null>(null);
  const router = useRouter();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm<CartOrderData>();

  const { items } = useCart();
  const { clearCart } = useCart();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        clearCart();
      }
    };
  }, [isSuccess, clearCart]);

  const onSubmit: SubmitHandler<CartOrderData> = async (data) => {
    try {
      if (!items || items.length === 0) {
        throw new Error('Корзина порожня');
      }
      const products: TypeCard[] = items.map(convertToTypeCard);
      const countEachProduct: Record<string, number> = getProductCounts(products);
      await sendCartOrder(data, products, countEachProduct);
      setOrderData(data);
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Помилка при відправці замовлення:', error);
      alert('Сталася помилка при відправці замовлення. Спробуйте ще раз або зв\'яжіться з нами по телефону.');
    }
  };

  if (isSuccess && orderData) {
    return (
      <div className={styles.successMessage}>
        <div className={styles.successIcon}>✓</div>
        <h2>Замовлення успішно оформлене!</h2>
        <p>Дякуємо за ваше замовлення, {orderData.name}!</p>
        <p>Ми зв'яжемося з вами найближчим часом для підтвердження деталей.</p>
        <div className={styles.orderDetails}>
          <h3>Інформація про замовлення:</h3>
          <ul>
            <li><strong>Спосіб доставки:</strong> {orderData.delivery === 'nova-poshta' 
              ? 'Нова Пошта' 
              : 'Укрпошта'}</li>
            <li><strong>Спосіб оплати:</strong> {orderData.payment === 'card' 
              ? 'Оплата картою' 
              : 'Оплата при отриманні'}</li>
          </ul>
        </div>
        <button 
          className={styles.submitButton} 
          onClick={() => {
            setIsSuccess(false);
            setOrderData(null);
            router.push('/');
          }}
        >
          ОФОРМИТИ НОВЕ ЗАМОВЛЕННЯ
        </button>
      </div>
    );
  }

  return (
    <form className={styles.cartForm} onSubmit={handleSubmit(onSubmit)}>
      <h2>Ваші дані</h2>
      
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Ім'я та прізвище *"
          {...register("name", { 
            required: "Це поле обов'язкове",
            minLength: { value: 3, message: "Мінімальна довжина 3 символи" }
          })}
        />
        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <input
          type="tel"
          placeholder="+38 (___) ___ __ __"
          {...register("phone", { 
            required: "Це поле обов'язкове",
            pattern: { 
              value: /^(\+38)?\s?\(?(\d{3})\)?\s?(\d{3})\s?(\d{2})\s?(\d{2})$/, 
              message: "Некоректний формат телефону" 
            }
          })}
        />
        {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <input
          type="email"
          placeholder="Ел. Пошта *"
          {...register("email", { 
            required: "Це поле обов'язкове",
            pattern: { 
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
              message: "Некоректний формат email" 
            }
          })}
        />
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Місто/Населений пункт *"
          {...register("city", { 
            required: "Це поле обов'язкове" 
          })}
        />
        {errors.city && <span className={styles.error}>{errors.city.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <select
          {...register("delivery", { 
            required: "Це поле обов'язкове" 
          })}
        >
          <option value="">Оберіть спосіб доставки *</option>
          <option value="nova-poshta">Нова Пошта</option>
          <option value="ukr-poshta">Укрпошта</option>
        </select>
        {errors.delivery && <span className={styles.error}>{errors.delivery.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <select
          {...register("payment", { 
            required: "Це поле обов'язкове" 
          })}
        >
          <option value="">Оберіть спосіб оплати *</option>
          <option value="card">Оплата картою</option>
          <option value="cash">Оплата при отриманні</option>
        </select>
        {errors.payment && <span className={styles.error}>{errors.payment.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <textarea
          placeholder="Додати коментар до замовлення"
          {...register("comment")}
        />
      </div>

      <div className={styles.checkboxGroup}>
        <input
          type="checkbox"
          id="noCall"
          {...register("noCall")}
        />
        <label htmlFor="noCall">
          Мені можна не телефонувати для підтвердження замовлення
        </label>
      </div>

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'ВІДПРАВКА...' : 'ПІДТВЕРДИТИ ЗАМОВЛЕННЯ'}
      </button>
    </form>
  );
};

export default CartForm; 