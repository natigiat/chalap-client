import React from "react";
import "./Schedule.css";
import { Collapse } from "antd";
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

export default function Schedule() {
  const text = "Here will be the Child Component";
  return (
    <div>
      <h1 className="header">עריכת שעות סיום</h1>
      <Collapse className="collapseMenu" onChange={callback}>
        <Panel header="ראשון" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="שני" key="2">
          <p>{text}</p>
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
