import React, { useState } from "react";
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

function Schedule() {
  const [ChildrenState, setChildrenState] = useState(Children);

  const onClickNewTime = (newTime, index) => {
    Children[index].time = newTime;
    setChildrenState([...Children]);
  };

  return (
    <div className="Schedule">
      <h1 className="header">עריכת שעות סיום</h1>
      <Collapse className="collapseMenu">
        {weekDays.map((day, i) => (
          <Panel header={Days[i]} key={i}>
            {ChildrenState.map((a, i) => (
              <Child
                key={i}
                index={i}
                onClickNewTime={onClickNewTime}
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
export default Schedule;
