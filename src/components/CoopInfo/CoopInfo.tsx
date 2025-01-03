import React from "react";
import style from "./CoopInfo.module.scss";
import Image from "next/image";
import background from "../../../public/image/Background_coop.png";
import { useTranslation } from "react-i18next";
import { COMPANY_CONTACTS } from "../../constants/contacts";

export default function CoopInfo() {
  const { t } = useTranslation();

  return (
    <div className={style.CoopInfo}>
      <div className={style.wrapper}>
        <Image src={background} width={474} height={630} alt="Picture" />
        <div className={style.info}>
          <h2>{t("CoopInfo_Title")}</h2>
          <p>{t("CoopInfo_Description")}</p>
          <div className={style.phone}>
            <span>{t("CoopInfo_Phone")}</span>
            <a href={`tel: ${COMPANY_CONTACTS.PHONE}`}>{COMPANY_CONTACTS.PHONE}</a>
          </div>
          <div className={style.email}>
            <span>{t("CoopInfo_Email")}</span>
            <a href={`mailto:${COMPANY_CONTACTS.EMAIL}`}>{COMPANY_CONTACTS.EMAIL}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
