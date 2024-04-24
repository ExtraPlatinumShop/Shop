"use client";

import { useState } from "react";
import style from "./style.module.scss";
import { sendEmail } from "@/UI/mail/send-email";
import Contact from "@/components/Contact/Contact";

export type FormData = {
    email: string;
    message: string;
  };
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
  

/*   const handleSubmit = async (event :any) => {
    event.preventDefault();
    const data : FormData={
        email:mail,
        message:messege
    }

   /*  const data = {
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
    } */
 
  
  return (
    <section className={style.cart}>
      <Contact/>
    </section>
  );
}
