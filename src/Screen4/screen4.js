import React from "react";
import logo from "./logo.svg";
import "./screen4.css";

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

  return (
    <div className="Screen4">
      Screen4
      <DropDown studentsArr={students} />
    </div>
  );
};

export default App;
