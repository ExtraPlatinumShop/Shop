"use client"; // import Swiper core and required modules
import {
  Navigation,
  Autoplay,
  Pagination,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import  Slide1 from '@/image/SlideOne.jpg';
import  Slide2 from '@/image/SlideTwo.png';
import  Slide3 from '@/image/SlideThree.png';
import  Slide4 from '@/image/SlideFour.png';




// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
import Image from "next/image";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
     
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => console.log()}
      onSlideChange={() => console.log()}
    >
      <SwiperSlide>
        <Image
          src={Slide1}
          alt="Slider Image"
          width={900}
          height={900}
        ></Image>
      </SwiperSlide>
      <SwiperSlide><Image
          src={Slide2}
          alt="Slider Image"
          width={900}
          height={900}
        ></Image></SwiperSlide>
      <SwiperSlide><Image
          src={Slide3}
          alt="Slider Image"
          width={900}
          height={900}
        ></Image></SwiperSlide>
      <SwiperSlide><Image
          src={Slide4}
          alt="Slider Image"
          width={900}
          height={900}
        ></Image></SwiperSlide>
    </Swiper>
  );
};
