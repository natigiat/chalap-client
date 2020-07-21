import React from "react";
// import logo from "./logo.svg";
import "./screen4.css";
import Map from "./map";
import StudentList from "./Studentlist";
import ShuttleTravelRoute from "./ShuttleTravelRoute";
import { Button } from "antd";

const Screen4 = (props) => {
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

  const defaultLocation = { lat: 31.864347, lng: 35.260679, zoom: 11 };

  const coordinates = [
    { lat: 31.864347, lng: 35.260679, desc: "home" },
    { lat: 31.932534, lng: 35.022965, desc: "school" },
    {
      lat: -40,
      lng: 160,
      desc: "bus location",
    },
  ];

  const path = ["ירושלים", "מעלה מכמש"];

  const routeTimes = ["08:30", "09:30", "10:30"];

  return (
    <div className="Screen4">
      Screen4
      <StudentList students={students} />
      <Button type="link">הלוך</Button>
      <Button type="link">חזור</Button>
      <Map
        defaultLocation={defaultLocation}
        coordinates={coordinates}
        busLocation={busLocation}
      />
      <ShuttleTravelRoute path={path} routeTimes={routeTimes} />
    </div>
  );
};

export default Screen4;
