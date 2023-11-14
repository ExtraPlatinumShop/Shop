import React from 'react'
import styleLoad from './loader-Style.module.css'
export default function Loading() {
  return (
<section className={styleLoad.load_block}>
    <div className={styleLoad.loader}>
    <span  className={styleLoad.loader_text}>loading</span>
      <span className={styleLoad.load}></span>
  </div>
  </section>
  )
}
