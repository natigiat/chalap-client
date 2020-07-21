import React from "react";
import childrensMock from "./childrens.mock";
import Child from "./Child"
import "./Schedule.css";
import { Collapse } from "antd";
const { Panel } = Collapse;

const weekDays=[
  "Sunday","Monday", "Tuesday", "Wensday", "Thursday", "Friday"
]

// const data =[
// {
//   Day={
    
//   }

// }
// ]
//    "

// ]

export default function Schedule() {
  const text = "hello";
  return (
    <div>
      <h1 className="header">עריכת שעות סיום</h1>
      <Collapse className="collapseMenu">
        
        <Panel header="ראשון" key="1">
          {childrensMock.map((child, childIndex) => (
            <Child 
            key={childIndex}
            name={child.name}
            time={child.time}
             />
          ))}
        </Panel>
        <Panel header="שני" key="2">
          <p>{"text"}</p>
        </Panel>
        <Panel header="שלישי" key="3">
          <p>{text}</p>
        </Panel>
        <Panel header="רביעי" key="4">
          <p>{text}</p>
        </Panel>
        <Panel header="חמישי" key="5">
          <p>{text}</p>
        </Panel>
        <Panel header="שישי" key="6">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
}
