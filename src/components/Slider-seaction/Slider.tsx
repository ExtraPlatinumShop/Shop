"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import  "./sliderSeaction.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";


interface Props {
  name: string;
  image: string;
  albom: string[];
}

const MySwiper = (props: Props) => {
  const { albom,name,image } = props;
  
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
    /*   spaceBetween={10} */
      slidesPerView={1}  
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
      onSwiper={(swiper) => console.log()}
      onSlideChange={() => console.log()}
    >
     {/*  {albom.map((image: string, index: number) => (
        <SwiperSlide key={index}>
          <Link href={'/Product/'+ name}>
            <img src={image} alt={`Фото ${index + 1}`} />
          </Link>
        </SwiperSlide>
      ))} */}
      <SwiperSlide className={`vertical_slide image_zoom`}>
    
        <img src={image} alt="" />
       
 
    </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
