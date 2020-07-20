import React from "react";
// import logo from "./logo.svg";
import "./screen4.css";
import Map from "./map";
<<<<<<< HEAD
// import StudentList from "./studentList";
import Flowchart_Stations from "./Flowchart_Stations";
=======
import StudentList from "./studentList";
import FlowchartStations from "./FlowchartStations";
import { Button } from "antd";
>>>>>>> 5929f7428cb42b6b3623d2e9a34f83e119f1675b

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
    { lat: 31.864347, lng: 35.260679 },
    { lat: 31.932534, lng: 35.022965 },
  ];

  const busLocation = [
    {
      lat: -40,
      lng: 160,
    },
  ];

  const path = ["ירושלים", "מעלה מכמש"];

  const routeTimes = ["08:30", "09:30", "10:30"];

  //   const stations = [
  //     {
  //       name: "school",
  //       visited: "true",
  //       timeExpected: "0",
  //     },
  //     {
  //       name: "station1",
  //       visited: "true",
  //       timeExpected: "0",
  //     },
  //     {
  //       name: "station2",
  //       visited: "false",
  //       timeExpected: "00:05",
  //     },
  //     {
  //       name: "home",
  //       visited: "false",
  //       timeExpected: "00:10",
  //     },
  //   ];

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
      <FlowchartStations stations={stations} />
    </div>
  );
};

export default Screen4;
