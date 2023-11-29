import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ua: {
    translation: {
   
      Header_Main_Page: "Головна",
      Header_About_Us: "Про нас",
      Header_Basket: "Корзина",
      Header_Сooperation: "Співпраця",
      Header_Street: "м. Львів, вул. Льяна, 9",
      Home_screen_to_catalog: "В каталог",
      money:"Грн",
      ml:"мл",
      litr:"Л",
      Stock:"В наявності",
      To_basket:"В кошик",
      Read_more:"Читати далі...",
      Little_soap_aloe: "Рідке крем-мило з екстрактом Алое",
      Little_soap_aloe_text:
        "Наша відмінна формула миття ефективно бореться з різноманітними забрудненнями. Рідке мило з комплексом м'яких ПАВ гарантує відмінне утворення піни, швидке та якісне змивання забруднень. Склад включає аква, лауретсульфат натрію, хлорид натрію, кокамідопропілбетаїн, кокамід DEA, лимонну кислоту, парфумерію, метилхлорізотіазолінон та метилізотіазолінон, ксантанову камедь та барвник CI 16255.",
        Big_soap_moloko_med:'Рідке крем-мило з екстрактом "Молоко мед"'
    },
    

  },
  en: {
    translation: {
      
      Header_Main_Page: "Main Page",
      Header_About_Us: "About us",
      Header_Basket: "Cart",
      Header_Сooperation: "Сooperation",
      Header_Street: "m. Lviv, str. Lyana, 9",
      Home_screen_to_catalog: "To Catalog",
      money:"UAH",
      ml:"ml",
      litr:"L",
      Stock:"In stock",
      To_basket:"To cart",
      Read_more:"Read more...",
      Little_soap_aloe: "Liquid cream soap with Aloe extract",
      Little_soap_aloe_text:"Our excellent washing formula effectively fights against various types of dirt. Liquid soap with a complex of soft surfactants guarantees excellent foam formation, fast and high-quality washing of dirt. The composition includes aqua, sodium laureth sulfate, sodium chloride, cocamidopropyl betaine, cocamide DEA, citric acid, perfume, methylchloroisothiazolinone and methylisothiazolinone, xanthan gum and color CI 16255."
    },
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
