import React from "react";
import style from "./HomeScreen.module.scss";
import Image from "next/image";
import back from "@/image/back-main-screen.svg";
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
            src={leftProduct}
            alt="Product image"
          ></Image>
          <Image
            className={style.rightProduct}
            src={rightProduct}
            alt="Product image"
          ></Image>{" "}
          <Image
            className={style.centerProduct}
            src={centerProduct}
            alt="Product image"
          ></Image>
             <Image
            className={style.aloe}
            src={aloe}
            alt="Aloe image"
          ></Image>
          <div className={style.label}>
            <h1>
              Чистота з комфортом: Побутова Хімія від
              <span>EXTRA platinum</span>
            </h1>
            <h2>
              Відкрийте світ бездоганної чистоти та свіжості з нашою ефективною
              лінійкою засобів для дому.
            </h2>
            <Link href="#catalog">{t("Home_screen_to_catalog")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
