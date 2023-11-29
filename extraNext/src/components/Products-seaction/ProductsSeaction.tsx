import React, { useEffect, useState } from "react";
import style from "./productsSeaction.module.scss";
import Filter from "./Filter/Filter";
import Card from "./Card/Card";
import Search from "./Search/Search";
import { onValue, ref } from "firebase/database";
import { db } from "@/UI/firebase/data";
import { useTranslation } from "react-i18next";
import Loading from "@/app/loading";

interface TypeCard {
  name: string;
  price: number;
  img: string;
}

const ProductsSection: React.FC = () => {
  const { t } = useTranslation("");
  const [loading, setLoading] = useState(true);
  const [finalData, setFinalData] = useState<TypeCard[]>([]);

  useEffect(() => {
    const fetchData = () => {
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();

        if (data) {
          const newData = Object.values(data) as TypeCard[];
          setFinalData(newData);
        }
      });
      setLoading(false)
    };

    fetchData();
  }, []);
console.log(finalData);

  return (
    <section id="catalog" className={style.product_block}>
      <div className={style.wrapper}>
        <div className={style.label_block}>
          <h2 className={style.title}>
            Бездоганна опіка для вашого дому: Огляньте наш <span>каталог</span>{" "}
            побутової хімії
          </h2>
          <p className={style.products_label}>
            Від елегантної чистоти до ефективного догляду: Знайдіть ідеальні
            рішення для кожного куточка вашої оселі в нашому каталозі.
          </p>
        </div>
        <div className={style.products_plate}>
          <div className={style.filter_block}>
            <Search />
            <Filter />
          </div>
          <div className={style.product_row}>
            <div className={style.product_cards_row}>
              {
               
               loading ? <Loading/>
               
              : (finalData.map((card: TypeCard, index: number) => (
                <Card key={index} name={card.name} price={card.price} image={card.img} />))) }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
