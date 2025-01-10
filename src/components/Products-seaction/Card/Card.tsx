import React from "react";
import style from "./card.module.scss";
import Image from "next/image";
import Link from "next/link";
import star from "@/image/icons/star.svg";
import { useTranslation } from "react-i18next";

export default function Card(
  props: {  name: string, image: string, price: number ,capacity:number,unit:string},
) {
  const { t } = useTranslation("");
  
  return (
    <Link href={`/Product/${props.name}`} className={style.product_card}>
      <div className={style.card_image}>
        <img src={props.image} alt="Product Picture" />
      </div>
      <div className={style.card_label}>{t(`${props.name}`)}</div>
      <div className={style.card_info}>
        <div className={style.price}>{props.price}  {t("money")}</div>
        <div className={style.add_to_cart}>
          <Image src={star} alt="star"></Image>
        </div>
      </div>
      <div className={style.card_capacity}>
        <div className={style.capacity_value}>{props.capacity} {t(`${props.unit}`)}</div>
      </div>
    </Link>
  );
}
