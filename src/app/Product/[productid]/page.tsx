"use client";
import style from "./productPage.module.scss";
import { onValue, ref, Database } from "firebase/database";
import { db } from "@/UI/firebase/data";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import "@/lang/i18n";
import { useTranslation } from "react-i18next";
import price from "@/image/icons/Price.svg";
import Image from "next/image";
import Slider from "@/components/Slider-seaction/Slider";
import { Swiper, SwiperSlide, SwiperRef} from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
export interface TypeCard {
  name: string;
  price: number;
  img: string;
  text: string;
  capacity: string;
  albom: string[];
  albomName:string[];
  unit:string;
}
export default function Page() {
  const [loading, setLoading] = useState(true);

  const arrow = (
    <svg
      width="30"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 10.5925L13.29 8.29195C13.383 8.1982 13.4936 8.12378 13.6155 8.073C13.7373 8.02222 13.868 7.99608 14 7.99608C14.132 7.99608 14.2627 8.02222 14.3846 8.073C14.5065 8.12378 14.6171 8.1982 14.71 8.29195C14.8038 8.38493 14.8781 8.49556 14.9289 8.61744C14.9797 8.73933 15.0058 8.87007 15.0058 9.00211C15.0058 9.13416 14.9797 9.26489 14.9289 9.38678C14.8781 9.50867 14.8038 9.61929 14.71 9.71228L10.71 13.7132C10.6149 13.8043 10.5028 13.8757 10.38 13.9233C10.1366 14.0233 9.86351 14.0233 9.62005 13.9233C9.4973 13.8757 9.38516 13.8043 9.29005 13.7132L5.29007 9.71228C5.19683 9.61902 5.12287 9.5083 5.07241 9.38645C5.02195 9.2646 4.99598 9.134 4.99598 9.00211C4.99598 8.87022 5.02195 8.73962 5.07241 8.61777C5.12287 8.49592 5.19683 8.38521 5.29007 8.29195C5.38331 8.19869 5.494 8.12471 5.61582 8.07423C5.73764 8.02376 5.86821 7.99779 6.00007 7.99779C6.13193 7.99779 6.2625 8.02376 6.38432 8.07423C6.50614 8.12471 6.61683 8.19869 6.71007 8.29195L9.00005 10.5925V1.00023C9.00005 0.734956 9.10541 0.480542 9.29295 0.292962C9.48048 0.105382 9.73483 0 10 0C10.2653 0 10.5196 0.105382 10.7072 0.292962C10.8947 0.480542 11 0.734956 11 1.00023V10.5925ZM9.96932e-05 10.0023C-0.00824405 8.133 0.50731 6.29872 1.48828 4.70757C2.46926 3.11642 3.87639 1.83208 5.55007 1.00023C5.78877 0.880859 6.06509 0.861217 6.31827 0.945628C6.57144 1.03004 6.78072 1.21159 6.90006 1.45034C7.01941 1.68909 7.03905 1.96548 6.95466 2.21872C6.87027 2.47195 6.68876 2.68128 6.45007 2.80066C5.17339 3.433 4.0887 4.39486 3.30807 5.58686C2.52744 6.77886 2.07921 8.15774 2.00968 9.581C1.94016 11.0043 2.25186 12.4203 2.9126 13.6827C3.57333 14.9452 4.55911 16.0082 5.76807 16.762C6.97703 17.5159 8.3653 17.9331 9.78943 17.9706C11.2136 18.0081 12.6219 17.6646 13.8688 16.9755C15.1158 16.2864 16.1562 15.2767 16.8824 14.0508C17.6087 12.8249 17.9945 11.4273 18 10.0023C18.0065 8.51088 17.5924 7.04781 16.8053 5.78105C16.0182 4.51429 14.8899 3.49517 13.55 2.84067C13.3113 2.72129 13.1298 2.51196 13.0454 2.25873C12.961 2.00549 12.9807 1.7291 13.1 1.49035C13.2194 1.2516 13.4287 1.07005 13.6818 0.985637C13.935 0.901226 14.2113 0.920869 14.45 1.04024C16.0455 1.83326 17.4002 3.03823 18.3741 4.53053C19.3479 6.02283 19.9054 7.74827 19.989 9.52836C20.0726 11.3084 19.6792 13.0786 18.8495 14.6556C18.0198 16.2326 16.784 17.5593 15.2698 18.4984C13.7557 19.4375 12.0182 19.955 10.2371 19.9972C8.45592 20.0394 6.69586 19.6049 5.13891 18.7386C3.58195 17.8724 2.28465 16.6057 1.3812 15.0698C0.477742 13.5339 0.000936141 11.7844 9.96932e-05 10.0023Z"
        fill="#787878"
      />
    </svg>
  );
  const pathname = usePathname();
  const currentpath = pathname.slice(9);



  const [information, setInformation] = useState<TypeCard>();
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  const [finalData, setFinalData] = useState<TypeCard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const snapshot = await onValue(ref(db as Database), (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const newData = Object.values(data) as TypeCard[];
            setFinalData(newData);
            const foundData = newData.find((e) => e.name === currentpath);
            if (foundData) {
              setInformation(foundData);
            }
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentpath]);

  const translatedName = information ? t(information.name) : "";
  const translatedText = information ? t(information.text) : "";

  const sliderRef= useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  
  return (<>
  {information ?  <section className={style.product_page}>
      <div className={style.wrapper}>
        <h1 className={style.main_title}>{translatedName}</h1>
        {loading ? (
          <Loading />
        ) : (
          <div className={style.product_row}>
            <div className={style.product_visual}>
              <div className={style.slider}>
                {information.albom[0] !=''?
                <Swiper
                  ref={sliderRef}
                  className={style.vertical_swiper}
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={2}
                
                  direction="vertical"
                  navigation={{
                    prevEl: ".vertical_prev",
                    nextEl: ".vertical_next",
                  }}
                  onSwiper={(swiper) => console.log()}
                  onSlideChange={() => console.log()}
                >
                  {information?.albom.map((image: string, index: number) => (
                    <SwiperSlide className={style.vertical_slide} key={index +Math.random()}>
                      <Link href={"/Product/" + information.albomName[index]}>
                        <img src={image} alt={`Фото ${index + 1}`} />
                      </Link>
                    </SwiperSlide>
                  ))}
                  <div className={style.vertical_prev} onClick={handlePrev}>
                    {arrow}
                  </div>
                  <div className={style.vertical_next} onClick={handleNext}>
                    {arrow}
                  </div>
                </Swiper>
              : ''}
              </div>
              <div className={style.main_image_slider}>
                <div className={style.image_slider}>
                  {information ? (
                    <Slider
                      name={information.name}
                      albom={information.albom}
                      image={information.img}
                    />
                  ) : (
                    " "
                  )}
                </div>
                <div className={style.capacity}>
                  {information && (
                    <>
                      {`${information.capacity} ${t(
                        information.unit
                      )}`}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className={style.product_info}>
              <div className={style.main_info}>
                <Image src={price} alt="Price" width={25} height={25}></Image>

                <span>
                  {information ? t(` ${information.price} `) : " money"}
                  {t("money")}
                </span>
                <div className={style.capacity_info}>
                  {information && (
                    <>
                      {`${information.capacity} ${t(
                        information.unit
                      )}`}
                    </>
                  )}
                </div>
              </div>
              <div className={style.stock}>{t('Stock')}</div>
              <button className={style.btn_to_cart}>{t("To_basket")}</button>
              <div
                className={
                  active
                    ? style.product_information + " " + style.active
                    : style.product_information
                }
              >
                <p>{translatedText}</p>
                <span
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                 {t("Read_more")} 
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section> : <NotFound/>}</>
  );
}
