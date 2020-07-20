import React from "react";
import logo from "./logo.svg";
import "./screen4.css";
import Map from "./map";
import StudentList from "./studentList";

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

  const defaultLocation = [{ lat: -40, lng: 170, zoom: 11 }];

  const coordinates = [
    { lat: -34, lng: 151 },
    { lat: -50, lng: 200 },
  ];

  const busLocation = [
    {
      lat: -40,
      lng: 160,
    },
  ];

  const stations = [
    {
      name: "school",
      visited: "true",
      timeExpected: "0",
    },
    {
      name: "station1",
      visited: "true",
      timeExpected: "0",
    },
    {
      name: "station2",
      visited: "false",
      timeExpected: "00:05",
    },
    {
      name: "home",
      visited: "false",
      timeExpected: "00:10",
    },
  ];

  return (
    <div className="Screen4">
      Screen4
      <StudentList students={students} />
    </div>
  );
};

export default App;
