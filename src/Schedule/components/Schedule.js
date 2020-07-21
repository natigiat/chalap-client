import React, { useState } from "react";
import childrensMock from "./childrens.mock";
import Child from "./Child";
import "./Schedule.css";
import "./Child.css";
import { Collapse } from "antd";
const { Panel } = Collapse;
const Days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי"];
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wensday",
  "Thursday",
  "Friday",
];
const Children = [
  { name: "david", time: "13:45" },
  { name: "moshe", time: "14:30" },
  { name: "shuki", time: "15:00" },
];

export default function Schedule() {
  const [className, setClassName] = useState();
  const setTime = (e) => {
    e.target.parentNode.parentNode.querySelector(".time").className = "ttt";
    e.target.parentNode.parentNode
      .querySelector(".input")
      .classList.remove("input");
    e.target.parentNode.parentNode
      .querySelector(".button")
      .classList.remove("button");
    setClassName();
    console.log(e.target);
  };
  return (
    <div>
      <h1 className="header">עריכת שעות סיום</h1>
      <Collapse className="collapseMenu">
        {weekDays.map((day, i) => (
          <Panel header={Days[i]} key={i}>
            {Children.map((a, i) => (
              <Child
                onClick={setTime}
                key={"Child" + i}
                className={"child" + i}
                name={a.name}
                time={a.time}
              />
            ))}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}
