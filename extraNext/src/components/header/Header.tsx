"use client";
import style from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Cart from "../Cart/Cart";
import logo from "../../image/logo.png";
import home from "../../image/icons/Catalog.svg";

import "@/lang/i18n";
import { useTranslation } from "react-i18next";

import Lang from "@/lang/Lang";
export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <header className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.header_row}>
        <Link href="/"> <Image src={logo} alt="Picture Logo" width={100} height={100}></Image>
              </Link>
          <ul className={style.navigate}>
            <li>
              <Link href="/">
                {
                  <Image
                    src={home}
                    alt="Picture home"
                    width={25}
                    height={25}
                  ></Image>
                }
              </Link>
            </li>
            <li>
              <Link href="/">{t("Header_Main_Page")}</Link>
            </li>
            <li>
              <Link href="/About-us">{t("Header_About_Us")}</Link>
            </li>
            <li>
              <Link href="">{t("Header_Basket")}</Link>
            </li>{" "}
            <li>
              <Link href="/Cooperation">{t("Header_Сooperation")}</Link>
            </li>
            <li>
              <a className={style.telephone} href="tel:+38 (093) 50 78 611">
                +38 (093) 50 78 611
              </a>
            </li>
            <li>
              <a
                className={style.street}
                href="https://maps.app.goo.gl/o6cE7mh2EUhyG9sA8"
              >
                {t('Header_Street')}
              </a>
            </li>
            {
              <li>
                <Lang />
              </li>
            }
          </ul>
        </div>
      </div>
    </header>
  );
}
