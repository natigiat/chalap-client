import React from "react";
// import logo from "./logo.svg";
import "./screen4.css";
import Map from "./map";
import StudentList from "./Studentlist";
import ShuttleTravelRoute from "./ShuttleTravelRoute";
import { Button } from "antd";
import Reporting from "./Reporting";

let path = ["ירושלים", "מעלה מכמש"];

let routeTimes = ["08:30", "09:30", "10:30"];

const Screen4 = (props) => {
  const getStudentData = (studentId) => {
    switch (studentId) {
      case 1:
        path = ["ירושלים", "מעלה מכמש"];
        routeTimes = ["08:30", "09:30", "10:30"];
        break;
      case 2:
        path = ["בני אדם", "מעלה מכמש"];
        routeTimes = ["08:30", "09:00", "10:00"];
        break;
      case 3:
        path = ["אש קודש", "שילה"];
        routeTimes = ["08:10", "08:20", "08:30"];
        break;
      default:
      // code block
    }
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

  const buildStudentsData = () => {
    for (let id = 0; id < students.length; id++) {}
  };

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
      {/* <Map coordinates={coordinates} /> */}
      <ShuttleTravelRoute path={path} routeTimes={routeTimes} />
    </div>
  );
};

export default Screen4;
