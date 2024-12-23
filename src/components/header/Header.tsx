"use client";
import style from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../image/logo.png";
import home from "../../image/icons/Catalog.svg";

import Module from "../Module/Module";
import Cart from "../Cart/Cart";

import "@/lang/i18n";
import { useTranslation } from "react-i18next";
import Lang from "@/lang/Lang";

import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  const { t, i18n } = useTranslation();

  function burgerFunction() {
    setActive(!active);
  }
  function closeBurger(event: React.MouseEvent<HTMLDivElement>) {
    if (
      event.target instanceof HTMLElement &&
      event.target.className.includes("burger_content")
    ) {
      setActive(false);
    }
  }
  
  return (
    <header className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.header_row}>
          <Link href="/">
            <Image
              className={style.logo_image}
              src={logo}
              alt="Picture Logo"
              loading="lazy"
            ></Image>
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
                    loading="lazy"
                    priority={false}
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
              <Link href="/inFeature">{t("Header_Basket")}</Link>
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
                {t("Header_Street")}
              </a>
            </li>
            {
              <li>
                <Lang />
              </li>
            }
          </ul>
          <div
            className={
              active
                ? style.mobile_header + " " + style.active
                : style.mobile_header
            }
          >
            <Image src={home} alt="Picture home" width={25} height={25} loading="lazy" priority={false}></Image>
            <div
              onClick={burgerFunction}
              className={
                style.burger
              }
            ></div>
            <div
              onClick={(e ) => closeBurger(e)}
              className={style.burger_content}
            >
              <div className={active ? style.burger_main + " " + style.active : style.burger_main}>
                {active ? (
                  <div>
                  
                    <div
                      onClick={burgerFunction}
                      className={
                        active
                          ? style.burger + " " + style.active
                          : style.burger
                      }
                    ></div>
                    <ul className={style.burger_navigate}>
                      <li>
                        <Link href="/" onClick={() => setActive(false)}>
                          {
                            <Image
                              className={style.picture_home}
                              src={home}
                              alt="Picture home"
                              width={25}
                              height={25}
                              loading="lazy"
                              priority={false}
                            ></Image>
                          }
                          {
                            <Link href="/#catalog" onClick={() => setActive(false)}>
                              {t("Home_screen_to_catalog")}{" "}
                            </Link>
                          }
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/" onClick={() => setActive(false)}>{t("Header_Main_Page")}</Link>
                      </li>
                      <li>
                        <Link href="/About-us" onClick={() => setActive(false)}>{t("Header_About_Us")}</Link>
                      </li>
                      <li>
                        <Link href="/Cart" onClick={() => setActive(false)}>{t("Header_Basket")}</Link>
                      </li>{" "}
                      <li>
                        <Link href="/Cooperation" onClick={() => setActive(false)}>
                          {t("Header_Сooperation")}
                        </Link>
                      </li>
                      <li>
                        <div className={style.graph}>
                          <h2>{t("Footer_Work_Schedule")}</h2>
                          <p>{t("Footer_Time")}</p>
                        </div>
                      </li>
                      <li>
                      <span>  {t('Header_Adress')}</span>
                        <a
                          className={style.burger_street}
                          href="https://maps.app.goo.gl/o6cE7mh2EUhyG9sA8"
                        >
                          {t("Header_Street")}
                        </a>
                      </li>
                      <li>
                     <span> {t('Header_Contacts')}</span>
                        <a
                          className={style.burger_telephone}
                          href="tel:+38 (093) 50 78 611"
                        >
                          +38 (093) 50 78 611
                        </a>
                      </li>
                      {
                        <li>
                          <Lang />
                        </li>
                      }
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
