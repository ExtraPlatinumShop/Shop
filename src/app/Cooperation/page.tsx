"use client";
import CoopForm from "@/components/CoopForm/CoopForm";
import CoopInfo from "@/components/CoopInfo/CoopInfo";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import style from "./style.module.scss";

export default function Cooparation() {
  const [files, setFiles] = useState<File[]>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const handleSendForm = async (data: any) => {
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
  return (
    <div className={style.cooperation}>
      <CoopForm />
      <CoopInfo />
    </div>
  );
}
