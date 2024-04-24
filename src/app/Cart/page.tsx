"use client";

import { useState } from "react";
import style from "./style.module.scss";


export default function Cart() {
  const [mail, setmail] = useState("");
  const [messege, setMessege] = useState("");
  const [status, setStatus] = useState("");
 /*  async function sendMessege(data: any, e: any) {
    e.preventDefault();
    console.log(data);
    const response = await fetch(
      { sendMail },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    console.log(response);
    console.log(result);

    if (result.success) {
      alert("Сообщение отправлено!");
    } else {
      alert("Ошибка отправки!");
    }
  } */
  
  const handleSubmit = async (event :any) => {
    event.preventDefault();

    const data = {
      email: mail,
      message: messege,
    };

    try {
      const response = await fetch("../../UI/mail/sendmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Сообщение отправлено!");
      } else {
        setStatus("Ошибка отправки!");
      }
    } catch (error) {
      console.error(error);
      setStatus("Ошибка!");
    }
  };
  return (
    <section className={style.cart}>
      <form onSubmit={handleSubmit}>
        <label>
          Your email:
          <input
            name="email"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
          />{" "}
          Your message:
          <input value={messege} onChange={(e) => setMessege(e.target.value)} />
        </label>

        <button
          type="submit"
          /* onClick={(e) => sendMessege({ mail, messege }, e)} */
        >
          sendMessege
        </button>
      </form>
    </section>
  );
}
