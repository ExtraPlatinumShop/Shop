import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import style from "./productsSeaction.module.scss";
import Filter from "./Filter/Filter";
import Card from "./Card/Card";
import Search from "./Search/Search";
import { onValue, ref } from "firebase/database";
import { db } from "@/UI/firebase/data";
import { useTranslation } from "react-i18next";
import Loading from "@/app/loading";
import Image from "next/image";
import water from '@/image/water.png';

interface TypeCard {
  name: string;
  price: number;
  img: string;
  tag: string;
  capacity: number;
  unit: string;
}

const ProductsSection: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [finalData, setFinalData] = useState<TypeCard[]>([]);
  const [dataType, setDataType] = useState("All");
  const [dataSearch, setDataSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const [loadCount, setLoadCount] = useState(12);

  const fetchData = useCallback(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const newData = Object.values(data) as TypeCard[];
        setFinalData(newData);
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    }, {
      root: null,
      threshold: 0,
    });
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const filteredData = useMemo(() => 
    finalData.filter((card: TypeCard) =>
      t(card.name).toLowerCase().includes(dataSearch.toLowerCase())
    ), [finalData, dataSearch]);

  useEffect(() => {
    if (isVisible && loadCount < filteredData.length) {
      setLoadCount((prevCount) => prevCount + 12);
    }
  }, [isVisible, filteredData.length]);

  return (
    <section id="catalog" className={style.product_block}>
      <div className={style.wrapper}>
        <div className={style.label_block}>
          <h2 className={style.title}>
            {t('Product_screen_title_part1')}
            <span>{t('Product_screen_title_part2')}</span>
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
          />
          <div className={style.filter_block}>
            <Search takeData={setDataSearch} />
            <Filter takeData={setDataType} />
          </div>
          <div className={style.product_row}>
            <div className={style.product_cards_row}>
              {loading ? (
                <Loading />
              ) : (
                filteredData.slice(0, loadCount).map((card: TypeCard, index: number) => (
                  (dataType === "All" || dataType === card.tag) && (
                    <Card
                      key={index}
                      name={card.name}
                      price={card.price}
                      image={card.img}
                      capacity={card.capacity}
                      unit={card.unit}
                    />
                  )
                ))
              )}
              <div ref={elementRef}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
