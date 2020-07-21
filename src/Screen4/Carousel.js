import React, { useState, useEffect } from "react";
import StudentRoute from "./StudentRoute";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <StudentRoute />
      </SwiperSlide>
      <SwiperSlide>
        <StudentRoute />
      </SwiperSlide>
      <SwiperSlide>
        <StudentRoute />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
export default Carousel;
