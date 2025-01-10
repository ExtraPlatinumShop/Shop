import React from "react";
import style from "./HomeScreen.module.scss";
import Image from "next/image";
import leftProduct from "@/image/products/litl-soap-aloe.png";
import centerProduct from "@/image/products/opolisk-yellow.png";
import rightProduct from "@/image/products/toilet.png";
import aloe from "@/image/aloe-main-screen.svg";
import "@/lang/i18n";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function HomeScreen() {
  const { t, i18n } = useTranslation();
  return (
    <section className={style.homeScreen}>
      <div className={style.wrapper}>
        <div className={style.homeScreen_row}>
          <Image
            className={style.leftProduct}
            src="https://firebasestorage.googleapis.com/v0/b/extra-d6506.appspot.com/o/Little_soap%2Flitl-soap-aloe.webp?alt=media&token=3cb804c8-4753-40a5-98ad-cc4c784c40a4"
            alt="Product image"
            loading="lazy"
            width={100}
            height={100}
          ></Image>
          <Image
            loading="lazy"
            className={style.rightProduct}
            src="https://firebasestorage.googleapis.com/v0/b/extra-d6506.appspot.com/o/%D0%A1onditioner%2Fopolisk-yellow.webp?alt=media&token=d64e55f8-63ae-40bf-bdef-acc5b712c1bf"
            alt="Product image"
            width={100}
            height={100}
          ></Image>
          <Image
            loading="lazy"
            className={style.centerProduct}
            src="https://firebasestorage.googleapis.com/v0/b/extra-d6506.appspot.com/o/Toilet_gel%2Ftoilet.webp?alt=media&token=bf7ab299-14c0-425f-bb26-5fe719cae9bc"
            alt="Product image"
            width={100}
            height={100}
          ></Image>
          <Image className={style.aloe} src={aloe} alt="Aloe image"></Image>
          <div className={style.label}>
            <h1>
              {t("Home_screen_H1_label")}
              <span>{t("EXTRA")}</span>
            </h1>
            <h2>{t("Home_screen_H2_label")}</h2>
            <Link href="#catalog">{t("Home_screen_to_catalog")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
