import React from "react";
import "./FlowchartStations.css";
import { Divider, Timeline, LeftOutlined } from "antd";
import { ClockCircleOutlined, LeftOutlined } from "@ant-design/icons";

const Flowchart_Stations = (props) => {
  return (
    <div className="Flowchart_Stations">
      <Timeline mode="right">
        <Divider orientation="left" plain></Divider>
        <Timeline.Item color="green">צומת שילה</Timeline.Item>
        <Divider orientation="left" plain></Divider>
        <Timeline.Item> תחנה קודמת </Timeline.Item>
        <Divider orientation="left" plain></Divider>
        <Timeline.Item>
          תחנת עליה של יוסף-חיים.
          <LeftOutlined />
          <div className="Arrives_in">מגיע בעוד: </div>
        </Timeline.Item>

        <Divider orientation="left" plain></Divider>
        <Timeline.Item>תחנה הבאה</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Flowchart_Stations;
