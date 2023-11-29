import React, { useState } from "react";
import style from "./search.module.scss";
export default function Search() {
  const [data, setData] = useState();
 
  
  return (
    <>
      <input 
      className={style.search} 
      type="search" 
      placeholder="Пошук..."
      value={data}
      onChange={(e:any)=>{setData(e.currentTarget.value)}} />
    </>
  );
}
