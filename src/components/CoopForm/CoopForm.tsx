import React from "react";
import style from "./CoopForm.module.scss";
import { sendCoop } from "@/UI/telegram/telegram";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Inputs = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

export default function CoopForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ name, email, message, phone }) => {
    await sendCoop(name, email, message, phone);
    reset();
  };

  return (
    <div className={style.CoopForm}>
      <div className={style.coop_wrapper}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder={t("Coop_Form_Name")}
            {...register("name")}
          />

          <input
            type="email"
            placeholder={t("Coop_Form_Email")}
            {...register("email")}
          />
          <input
            type="tel"
            placeholder={t("Coop_Form_Phone")}
            {...register("phone")}
          />

          <textarea
            placeholder={t("Coop_Form_Message")}
            {...register("message")}
            style={{ resize: 'none' }}
          />

          <button className={style.submit_btn} type="submit">
            {t("Coop_Form_Submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
