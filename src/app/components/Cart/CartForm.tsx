'use client';

import { FC, useState } from 'react';
import styles from './CartForm.module.css';

const CartForm: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    delivery: '',
    payment: '',
    comment: '',
    noCall: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <form className={styles.cartForm} onSubmit={handleSubmit}>
      <h2>Ваші дані</h2>
      
      <div className={styles.formGroup}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ім'я та прізвище *"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+38 (___) ___ __ __"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ел. Пошта *"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Місто/Населений пункт *"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <select
          name="delivery"
          value={formData.delivery}
          onChange={handleChange}
          required
        >
          <option value="">Оберіть спосіб доставки *</option>
          <option value="nova-poshta">Нова Пошта</option>
          <option value="ukr-poshta">Укрпошта</option>
          <option value="self-pickup">Самовивіз</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <select
          name="payment"
          value={formData.payment}
          onChange={handleChange}
          required
        >
          <option value="">Оберіть спосіб оплати *</option>
          <option value="card">Оплата картою</option>
          <option value="cash">Оплата при отриманні</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Додати коментар до замовлення"
        />
      </div>

      <div className={styles.checkboxGroup}>
        <input
          type="checkbox"
          name="noCall"
          id="noCall"
          checked={formData.noCall}
          onChange={handleChange}
        />
        <label htmlFor="noCall">
          Мені можна не телефонувати для підтвердження замовлення
        </label>
      </div>

      <button type="submit" className={styles.submitButton}>
        ПІДТВЕРДИТИ ЗАМОВЛЕННЯ
      </button>
    </form>
  );
};

export default CartForm; 