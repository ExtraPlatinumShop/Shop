import { useTranslation } from "react-i18next";
import style from "./lang.module.scss";
export default function Lang() {
  const { t, i18n } = useTranslation();
  return (
    <div className={style.lang}>
      <div onClick={() => i18n.changeLanguage("ua")} className={style.ua}>
        ua
      </div>
      <div onClick={() => i18n.changeLanguage("en")} className={style.en}>
        en
      </div>
      <div onClick={() => i18n.changeLanguage("ru")} className={style.ru}>
        ru
      </div>
    </div>
  );
}
