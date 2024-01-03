"use client"
import React, { useState } from 'react'
import  {SubmitHandler}  from "react-hook-form";

export default function Cooparation() {


  const [files, setFiles] = useState<File[]>();


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const handleSendForm = async (data :any) => {
    setIsSubmitting(true);
    const text =
      `Привіт, Людмило!🙌\n` +
      `Надійшло нове замовлення.🤑\n` +
      `📚Дисципліна: ${data.subject}\n` +
      `📖Тип роботи: ${data.workType}\n` +
      `🕒Термін: ${data.term}\n` +
      `📧E-mail: ${data.email}\n` +
      `⁉️Тема роботи: ${data.topic}\n` +
      `📱Телефон: ${data.phone}\n` +
      `✨Оригінальність роботи: ${data.uniqueness}%\n` +
      `✍️Кількість сторінок: ${data.pages} ст.\n` +
      `➕Додаткові вимоги: ${
        data.requirements ? data.requirements : "Поки немає"
      }`;
    const body = {
      chat_id: process.env.REACT_APP_CHAT_ID,
      text,
    };
    try {
      const result = await (
        await fetch(
          `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        )
      ).json();
      if (files) {
        if (result.ok === true) {
          if (!files || files.length === 0) {
            setOpenSuccessModal(true);
            setTimeout(function () {
              window.location.reload();
            }, 2000);
            return;
          }
          for (const file of files) {
            const form = new FormData();
            form.append("document", file);
            form.append("chat_id", process.env.REACT_APP_CHAT_ID!);
            form.append("reply_to_message_id", result.result.message_id);
            await fetch(
              `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT_TOKEN}/sendDocument`,
              {
                method: "POST",
                body: form,
              }
            );
          }
        }
        setOpenSuccessModal(true);
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      alert("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };
  return  (<div className="App">
  <h1>Співпраця</h1>
  <p>Залиште ваші контактні дані, і ми з вами зв'яжемося:</p>
  <form  /* action="telegram.ts" */ method='post' onSubmit={handleSendForm} >
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
