import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./Screen4.css";
import GoogleApiWrapper from "./Components/GoogleApiWrapper/GoogleApiWrapper";
//import StudentList from "./Studentlist";
import { Button } from "antd";
import Carousel from "./Components/Carousel/Carousel";
import ridesMock from "./rides.mock";
import RefreshButton from "./Components/RefreshButton/RefreshButton";
import RouteButton from "./Components/RouteButton/RouteButton";
import PopupAddStudents from "./Components/PopupAddStudents/PopupAddStudents";

const Screen4 = (props) => {
  const [showPopup, setShowPopup] = useState(0);
  const [hourSelected, setHourSelected] = useState(0);
  const [studentSelected, setStudentSelected] = useState();

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log(`You clicked ${hourSelected}`);
  // });

  const handleHourSelected = (hour) => {
    setHourSelected(hour);
  };

  const handleStudentSelected = (studentId) => {
    setStudentSelected(studentId);
  };

  const students = [
    {
      id: 1,
      name: "shimon",
    },
    {
      id: 2,
      name: "yaakov",
    },
    {
      id: 3,
      name: "yosef",
    },
  ];
  const studentRouteInfo = [
    {
      startPoint: "בני אדם",
      endPoint: "מעלה מכמש",
    },
    {
      startPoint: "מעלה מכמש",
      endPoint: "כוכב יעקב",
    },
    {
      startPoint: "אש קודש",
      endPoint: "שילה",
    },
  ];
  const studentRouteTimes = [
    ["08:30", "09:00", "10:00"],
    ["08:30", "09:30", "10:30"],
    ["08:10", "08:40"],
  ];
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
            students={students}
            studentRouteInfo={studentRouteInfo}
            studentRouteTimes={studentRouteTimes}
            selectedHour={handleHourSelected}
            studentSelected={handleStudentSelected}
          />
        </div>
      )}
    </div>
  );
};
export default Screen4;
