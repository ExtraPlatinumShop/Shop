import React, { useEffect, useRef, useState } from "react";
import style from "./productsSeaction.module.scss";
import Filter from "./Filter/Filter";
import Card from "./Card/Card";
import Search from "./Search/Search";
import { onValue, ref } from "firebase/database";
import { db } from "@/UI/firebase/data";
import { useTranslation } from "react-i18next";
import Loading from "@/app/loading";
import Image from "next/image";
import water from '@/image/water.png'

interface TypeCard {
  name: string;
  price: number;
  img: string;
  tag: string;
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
      setLoading(false);
    };

    fetchData();
  }, []);

  const [dataType, setDataType] = useState("All");
  const [dataSearch, setDataSearch] = useState("");

const filteredData = finalData.filter((card: TypeCard) =>
t(card.name).toLowerCase().includes(dataSearch.toLowerCase())
  );




  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const [loadCount, setLoadCount] = useState(12);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    }, {
      root: null,
      threshold: 0,
    });
    observer.observe(elementRef.current);
    
    return () => observer.unobserve(elementRef.current);
  
  }, [elementRef]);
  useEffect(() => {
    if (isVisible && loadCount < filteredData.length ) {
      setLoadCount(loadCount + 12)
    }
    return () => {
      
    };
  }, [isVisible]);


  

  return (
    <section id="catalog" className={style.product_block}>
      <div className={style.wrapper}>
        <div className={style.label_block}>
          <h2 className={style.title}>
          {t('Product_screen_title_part1')}<span>{t('Product_screen_title_part2')}</span>
          {t('Product_screen_title_part3')}
          </h2>
          <p className={style.products_label}>
          {t('Product_screen_label')}
          </p>
        </div>
       
        <div className={style.products_plate}>
        <Image
              className={style.water_image}
              src={water}
              alt="Picture water"
            ></Image>
          <div className={style.filter_block}>
            <Search takeData={setDataSearch}/>
            <Filter takeData={setDataType} />
          </div>
          <div className={style.product_row}>
            <div className={style.product_cards_row}>
            {loading ? (
        <Loading />
      ) : (
        filteredData.map((card: TypeCard, index: number) =>
          dataType === "All" ? (
            index<loadCount?
            <Card
              key={index}
              name={card.name}
              price={card.price}
              image={card.img}
            /> :''
          ) : dataType === card.tag && (
            <Card
              key={index}
              name={card.name}
              price={card.price}
              image={card.img}
            />
          )
        )
      )}
      <div ref={elementRef} className=""> </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
