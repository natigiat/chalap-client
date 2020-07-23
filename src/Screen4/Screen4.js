import React, { useState, useEffect } from "react";
import "./Screen4.css";
import GoogleApiWrapper from "./Components/GoogleApiWrapper/GoogleApiWrapper";
import { Button } from "antd";
import Carousel from "./Components/Carousel/Carousel";
import ridesMock from "./rides.mock";
import RefreshButton from "./Components/RefreshButton/RefreshButton";
import RouteButton from "./Components/RouteButton/RouteButton";
import PopupAddStudents from "./Components/PopupAddStudents/PopupAddStudents";

const Screen4 = (props) => {
  const routeDirections = [
    { id: 0, desc: "הלוך" },
    { id: 1, desc: "חזור" },
  ];

  const [showPopup, setShowPopup] = useState(0);
  const [hourSelected, setHourSelected] = useState(0);
  const [studentSelected, setStudentSelected] = useState();
  const [routeDirSelected, setRouteDiRouteDirSelected] = useState(
    routeDirections[0].id
  );

  const handleHourSelected = (hour) => {
    setHourSelected(hour);
  };

  const handleStudentSelected = (studentId) => {
    setStudentSelected(studentId);
  };

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
  // const studentRouteInfo = [
  //   {
  //     startPoint: "בני אדם",
  //     endPoint: "מעלה מכמש",
  //   },
  //   {
  //     startPoint: "מעלה מכמש",
  //     endPoint: "כוכב יעקב",
  //   },
  //   {
  //     startPoint: "אש קודש",
  //     endPoint: "שילה",
  //   },
  // ];
  // const studentRouteTimes = [
  //   ["08:30", "09:00", "10:00"],
  //   ["08:30", "09:30", "10:30"],
  //   ["08:10", "08:40"],
  // ];
  const coordinates = [
    { lat: 31.864347, lng: 35.260679, desc: "home" },
    { lat: 31.932534, lng: 35.022965, desc: "school" },
    {
      lat: 31.864347,
      lng: 35.160679,
      desc: "bus location",
    },
  ];

  return (
    <div className="Screen4">
      <div className="routeDirButtons">
        <div className="routeBtn selected">
          <RouteButton text={"הלוך"} />
        </div>
        <div className="routeBtn">
          <RouteButton text={"חזור"} />
        </div>
      </div>
      <div className="mapWrapper">
        <RefreshButton className="refreshBtn" />
        <GoogleApiWrapper coordinates={coordinates} hourToMark={hourSelected} />
      </div>
      {showPopup ? (
        <div className="popupAddStudents">
          <PopupAddStudents />
        </div>
      ) : (
        <div className="swiperWrapper">
          <Carousel
            studentsArray={studentsArray}
            // studentRouteInfo={studentRouteInfo}
            // studentRouteTimes={studentRouteTimes}
            // selectedHour={handleHourSelected}
            // studentSelected={handleStudentSelected}
          />
        </div>
      )}
    </div>
  );
};
export default Screen4;
