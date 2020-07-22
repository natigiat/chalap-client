import React, { useState, useEffect } from "react";
import StudentRoute from "./StudentRoute/StudentRoute";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
} from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, Virtual, A11y]);

const Carousel = (props) => {
  const students = props.students;
  const studentRouteInfo = props.studentRouteInfo;
  const studentRouteTimes = props.studentRouteTimes;
  const studentsArray = [
    {
      id: 1,
      name: "שירה",
      startPoint: "בית אל",
      endPoint: "חן עפרה",
      routeTimes: ["08:30", "09:00", "10:00"],
    },
    {
      id: 2,
      name: "יעקב",
      startPoint: "אש קודש",
      endPoint: "שילה",
      routeTimes: ["08:30", "09:30", "10:30"],
    },
    {
      id: 3,
      name: "יוסף",
      startPoint: "מעלה מכמש",
      endPoint: "כוכב יעקב",
      routeTimes: ["08:10", "08:40"],
    },
    {
      id: 4,
      name: "טל שלום",
      startPoint: "עטרת",
      endPoint: "נווה צוף",
      routeTimes: ["08:00", "08:30"],
    },
  ];
  return (
    <Swiper
      className="studentsSwiper"
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={(e) => console.log("slide change: " + e)}
      onSwiper={(swiper) => console.log("swiper: " + swiper)}
      centeredSlides={true}
      grabCursor={true}
      updateOnWindowResize={true}
      loop={true}
    >
      {studentsArray.map((student) => (
        <SwiperSlide>
          <StudentRoute
            key={student.id}
            studentName={student.name}
            startPoint={student.startPoint}
            endPoint={student.startPoint}
            routeTimes={student.routeTimes}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Carousel;
