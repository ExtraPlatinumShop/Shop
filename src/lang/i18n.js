import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ua: {
    translation: require("../../public/locales/ua/common.json"),
  },
  en: {
    translation: require("../../public/locales/en/common.json"),
  },
  ru: {
    translation: require("../../public/locales/ru/common.json"),
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ua",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
