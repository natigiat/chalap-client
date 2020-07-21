import React from "react";
// import logo from "./logo.svg";
import "./screen4.css";
import Map from "./map";
import StudentList from "./Studentlist";
// import ShuttleTravelRoute from "./ShuttleTravelRoute";
import { Button } from "antd";
import Reporting from "./Reporting";

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
      lat: -40,
      lng: 160,
      desc: "bus location",
    },
  ];

  return (
    <div className="Screen4">
      {/* <div><StudentList students={students} onChange={setStudentData}/></div> */}
      <Button className="routeDir" type="link">
        הלוך
      </Button>
      <Button className="routeDir" type="link">
        חזור
      </Button>
      <Map coordinates={coordinates} />
      {/* <ShuttleTravelRoute path={path} routeTimes={routeTimes} /> */}
      <Reporting />
    </div>
  );
};

export default Screen4;
