import React from "react";
import style from "./productsSeaction.module.scss";
import Filter from "./Filter/Filter";

export default function ProductsSeaction() {
  return (
    <section className={style.product_block}>
      <div className={style.wrapper}>
        <div className={style.label_block}>
          <h2 className={style.title}>Продукти</h2>
          <div className={style.products_counter}></div>
        </div>
        <div className={style.product_row}>
          <div className={style.filter_block}>
            <Filter/>
          </div>
          <div className={style.product_cards_row}>
            <div className={style.product_card}>
              <div className={style.card_image}></div>
              <div className={style.card_label}></div>
              <div className={style.card_info}>
                <div className={style.price}>999</div>
                <div className={style.add_to_cart}>cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
