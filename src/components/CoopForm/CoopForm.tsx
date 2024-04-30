import React from "react";
import style from "./CoopForm.module.scss";
import { sendCoop } from "@/UI/telegram/telegram";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function CoopForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ name, email, message }) => {
    await sendCoop(name, email, message);
  };

  
  return (
    <div className={style.CoopForm}>
      <div className={style.coop_wrapper}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder={"Enter your name"}
            {...register("name")}
          />

          <input
            type="email"
            placeholder={"Enter your e-mail"}
            {...register("email")}
          />

          <textarea
            placeholder={"Type your message"}
            {...register("message")}

            /* onChange={(e) => setMessage(e.target.value)}  */
          />

          <button className={style.submit_btn} type="submit">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}
