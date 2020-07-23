import React, { useState, useEffect } from "react";
import "./StudentRoute.css";
import Reporting from "./Reporting/Reporting";
import {} from "antd";
import {
  HomeOutlined,
  LeftOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const StudentRoute = (props) => {
  const openReportingModal = () => {};
  const [visible, setVisible] = useState(false);
  const routeTimesArray = props.routeTimes;
  const [addClassName, setAddClassName] = useState("");
  return (
    <div className={"StudentRoute"}>
      <div className="studentHeader">
        <div className="studentImage">
          <img src="/images/profileImage.png"></img>
        </div>

        <div className="studentDetails">
          <div className="studentName">{props.studentName}</div>
          <div className="notice">אין עיכובים צפויים</div>
        </div>
      </div>

      <div className="path">
        <img src="/images/homeIcon.svg" />
        <span className="startPoint">{props.startPoint}</span>
        <img className="arrow" src="/images/chevron-left.svg" />
        <img src="/images/map-pin.svg" />
        <span className="endPoint">{props.endPoint}</span>
      </div>

      <div className="hours">
        {props.routeTimes.map((routeTime) => (
          <button
            className="hour"
            // onClick={() => setAddClassName("sellectedHour")}
          >
            {routeTime}
          </button>
        ))}
      </div>

      <Reporting />
    </div>
  );
};

export default StudentRoute;
