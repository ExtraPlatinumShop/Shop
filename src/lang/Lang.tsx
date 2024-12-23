import { useTranslation } from "react-i18next";
import style from "./lang.module.scss";
import { useState } from "react";
import Image from 'next/image';

export default function Lang() {
  const [active, setActive] = useState(false);
  const { t, i18n } = useTranslation();

  const [curentLang, setCurentLang] = useState(i18n.language.toUpperCase());

  const languages = [
    { locale: "ua", name: "UA", imgSrc: "/icons/langFlags/ua.png" },
    { locale: "ru", name: "RU", imgSrc: "/icons/langFlags/ru.png" },
    { locale: "en", name: "EN", imgSrc: "/icons/langFlags/us.png" },
  ];

  const hendleChange = (e: any) => {
    i18n.changeLanguage(e.locale);
    setActive((prev) => !prev);
    setCurentLang(e.name);
  };

  return (
    <div className={style.lang}>
      <div
        onClick={(e) => setActive((prev) => !prev)}
        className={style.ua + " " + style.activeLang}
      >
        <div className={`${style.arrow} ${active ? style.arrow_active : ''}`}></div>
        {curentLang}
        <Image 
          src={languages.find((el) => el.name === curentLang)?.imgSrc || ''}
          alt={curentLang}
          width={20}
          height={15}
          loading="lazy"
        />
      </div>
      <ul
        className={
          active
            ? style.drop_down_list + " " + style.active
            : style.drop_down_list
        }
      >
        {languages.map((el) => [
          el.name !== curentLang ? (
            <li key={el.locale}>
              <div onClick={() => hendleChange(el)} className={style.lang}>
                {el.name}
                <Image 
                  src={el.imgSrc}
                  alt={el.name}
                  width={20}
                  height={15}
                  loading="lazy"
                />
              </div>
            </li>
          ) : (
            ""
          ),
        ])}
      </ul>
    </div>
  );
}
