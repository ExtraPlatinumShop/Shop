import React, { useEffect, useState } from "react";
import style from "./card.module.scss";
import Image from "next/image";
import star from "@/image/icons/star.svg";
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/navigation'

export default function Card(
  props: {  name: string, image: string, price: number },
) {
  const { t } = useTranslation("");
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/Product/${props.name}`)} className={style.product_card}>
      <div className={style.card_image}>
        <img src={props.image} alt="Product Picture" />
      </div>
      <div className={style.card_label}>{t(`${props.name}`)}</div>
      <div className={style.card_info}>
        <div className={style.price}>{props.price}</div>
        <div className={style.add_to_cart}>
          <Image src={star} alt="star"></Image>
        </div>
      </div>
    </div>
  );
}
