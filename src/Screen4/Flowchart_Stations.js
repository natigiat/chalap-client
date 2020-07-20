import React from "react";
import "./Flowchart_Stations.css";
import { Divider, Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const Flowchart_Stations = () => {
  return (
    <div className="Flowchart_Stations">
      <Timeline mode="right">
        <Divider orientation="left" plain></Divider>
        <Timeline.Item color="green">צומת שילה</Timeline.Item>
        <Divider orientation="left" plain></Divider>
        <Timeline.Item> תחנה קודמת </Timeline.Item>
        <Divider orientation="left" plain></Divider>
        <Timeline.Item>תחנת עליה של יוסף-חיים.</Timeline.Item>
        <Divider orientation="left" plain></Divider>
        <Timeline.Item>תחנה הבאה</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Flowchart_Stations;
