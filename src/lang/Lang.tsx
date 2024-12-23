import { useTranslation } from "react-i18next";
import style from "./lang.module.scss";
import { useState } from "react";

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
        {curentLang}
        <img src={languages.find((el) => el.name === curentLang)?.imgSrc} alt={curentLang} />

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
            <li>
              <div onClick={() => hendleChange(el)} className={style.lang}>
                {el.name}
                <img src={el.imgSrc} alt={el.name} />
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
