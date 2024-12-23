"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./footer.module.scss";
import logo from "../../image/logo.png";
import catalog from "../../image/icons/Catalog-White.svg";
import Image from "next/image";

import "@/lang/i18n";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footer_row}>
          <div className={styles.logo}>
            <Image
              src={logo}
              alt="Picture Logo"
              width={90}
              height={90}
              loading="lazy"
            ></Image>
          </div>
          <ul className={styles.footer_nav}>
            <li>
              <Link href="/#catalog">{t("Home_screen_to_catalog")}</Link>
              <Image
                src={catalog}
                alt="Picture Catalog"
                width={20}
                height={20}
                loading="lazy"
              ></Image>
            </li>
            <li>
              <Link href="/About-us">{t("Header_About_Us")}</Link>
            </li>
            <li>
              <Link href="/Cart">{t("Header_Basket")}</Link>
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
                {t("Header_Street")}
              </a>
            </div>
            <div className={styles.graph}>
              <h2>{t("Footer_Work_Schedule")}</h2>
              <p>
                {t("Footer_Time")}
                <span style={{ display: windowWidth <= 370 ? 'block' : 'inline' }}>
                  9:00 — 20:00
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
