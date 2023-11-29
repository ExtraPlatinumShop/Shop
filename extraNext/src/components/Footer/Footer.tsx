"use client"
import Link from "next/link";
import React from "react";
import styles from "./footer.module.scss";
import logo from "../../image/logo.png";
import catalog from "../../image/icons/Catalog-White.svg";
import Image from "next/image";

import "@/lang/i18n";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footer_row}>
          <div className={styles.logo}>
            <Image src={logo} alt="Picture Logo" width={90} height={90}></Image>
          </div>
          <ul className={styles.footer_nav}>
            <li>
              <Link href="#catalog">{t("Home_screen_to_catalog")}</Link>
              <Image
                src={catalog}
                alt="Picture Catalog"
                width={20}
                height={20}
              ></Image>
            </li>
            <li>
            <Link href="/About-us">{t("Header_About_Us")}</Link>
            </li>
            <li>
            <Link href="">{t("Header_Basket")}</Link>
            </li>
            <li>
            <Link href="/Cooperation">{t("Header_Сooperation")}</Link>
            </li>
          </ul>
          <div className={styles.contact_info}>
            <div className={styles.contact}>
              <a className={styles.telephone} href="tel:+38 (093) 50 78 611">
                +38 (093) 50 78 611
              </a>
              <a
                className={styles.street}
                href="https://maps.app.goo.gl/o6cE7mh2EUhyG9sA8"
              >
                 {t('Header_Street')}
              </a>
            </div>
            <div className={styles.graph}>
              <h2>Графік роботи:</h2>
              <p>Пн-Нд 9:00 — 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
