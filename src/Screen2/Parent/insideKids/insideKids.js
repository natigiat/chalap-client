import React, { useState, useEffect } from "react";
import SettingHours from "../Alert/Alert";
import "./Parent.css";

function Insidekids(props) {
  const [Days, setDays] = useState([
    {
      key: 1,
      day: "יום ראשון",
    },
    {
      key: 2,
      day: "יום שני",
    },
    {
      key: 3,
      day: "יום שלישי",
    },
    {
      key: 4,
      day: "יום רביעי",
    },
    {
      key: 5,
      day: "יום חמישי",
    },
    {
      key: 6,
      day: "יום שישי",
    },
  ]);

  return (
    <div className="parent">
      {props.image}
      {props.name}
      <div>פרטים אישיים</div>
      <div>שעת סיום</div>
      {Days.map((days) => (
        <SettingHours key={days.key} day={days.day} />
      ))}
    </div>
  );
}

export default Insidekids;
