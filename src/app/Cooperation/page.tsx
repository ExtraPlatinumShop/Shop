"use client"
import React, { useState } from 'react'

export default function Cooparation() {
/*   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); */

 /*  const handleSubmit = (e : object) => {
    e.preventDefault();
    // Тут можна додати логіку для обробки форми, наприклад, відправка даних на сервер
    console.log('Form submitted:', { name, email, message });
  }; */
  return  (<div className="App">
  <h1>Співпраця</h1>
  <p>Залиште ваші контактні дані, і ми з вами зв'яжемося:</p>
  <form  action="telegram.php" method='post' >
    <label>
      Ім'я:
      <input type="text" name="name" /* onChange={(e) => setName(e.target.value)} */ />
    </label>
    <br />
    <label>
      Електронна пошта:
      <input type="email" name="email"/*  onChange={(e) => setEmail(e.target.value)} */ />
    </label>
    <br />
    <label>
      Повідомлення:
      <textarea name={"message"} /* onChange={(e) => setMessage(e.target.value)}  *//>
    </label>
    <br />
    <button type="submit">Відправити</button>
  </form>
  <div>
    <h2>Контактні дані</h2>
    <p>Телефон: +1 23 456 7890</p>
    <p>Email: example@example.com</p>
  </div>
</div>
);
}
