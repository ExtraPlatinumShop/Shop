import React from "react";
import style from "./CoopInfo.module.scss";
import Image from "next/image";
import background from "../../../public/image/Background_coop.png";
export default function CoopInfo() {
  return (
    <div className={style.CoopInfo}>
      <div className={style.wrapper}>
        <Image src={background} width={474} height={630} alt="Picture" />
        <div className={style.info}>
          <h2>Співпратця</h2>
          <p>Залиште ваші контактні дані і ми з вами з’яжемося!</p>
          <div className={style.phone}>
            <span> Телефон:</span>
            <a href="tel: +38 (093) 50 78 611">+38 (093) 50 78 611</a>
          </div>
          <div className={style.email}>
            <span>Email:</span>
            <a href="mailto:vovakryt24@gmail.com">vovakryt24@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
