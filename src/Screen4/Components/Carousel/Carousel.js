import React, { useState, useEffect } from "react";
import StudentRoute from "./StudentRoute/StudentRoute";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Carousel = (props) => {
  const students = props.students;
  const studentRouteInfo = props.studentRouteInfo;
  const studentRouteTimes = props.studentRouteTimes;

  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <StudentRoute />
      </SwiperSlide>
      ;
      {/* {students.map((student) => {
        <SwiperSlide>
          <StudentRoute studentName={student.name}/>
        </SwiperSlide>;
      })} */}
    </Swiper>
  );
};
export default Carousel;
