import React from "react";
import SwiperSeaction from "./SwiperSeaction";
import style from './sliderSeaction.module.scss'

export default function SliderSeaction() {
  return (
    <div className={style.wrapper}>
      {<SwiperSeaction/>}
    </div>
  );
}
