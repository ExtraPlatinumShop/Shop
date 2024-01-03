import React, { useState } from "react";
import style from "./search.module.scss";
import { t } from "i18next";
export default function Search(props:any) {
  const [data, setData] = useState('');

 
  
  return (
    <div className={style.search}>
      <input 
    
      type="search" 
      placeholder={t("Search")}
      value={data}
      onChange={(e:any)=>{setData(e.currentTarget.value)
      props.takeData(e.currentTarget.value)
      
      
      }} />
    </div>
  );
}
