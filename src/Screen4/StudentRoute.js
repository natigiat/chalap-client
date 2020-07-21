import React, { useState, useEffect } from "react";
import "./StudentRoute.css";
import Reporting from "./Reporting";
import {} from "antd";
import {
  HomeOutlined,
  LeftOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const StudentRoute = (props) => {
  const openReportingModal = () => {};
  const [visible, setVisible] = useState(false);

  return (
    <div className="StudentRoute">
      <div className="studentHeader">
        <div className="studentImage">
          <img src="/images/profileImage.png"></img>
        </div>

        <div className="studentDetails">
          <div className="studentName">יוסף חיים</div>
          <div className="notice">אין עיכובים צפויים</div>
        </div>
      </div>

      <div className="path">
        <HomeOutlined className="icon" />
        <span className="startPoint">תחנת דלק מכמש </span>
        <span className="arrow">
          <LeftOutlined className="Leftcon" />
        </span>
        <EnvironmentOutlined className="icon" />
        <span className="endPoint">חן עפרה </span>
      </div>

      <div className="hours">
        <div className="hour">8:30</div>
        <div className="hour">9:30</div>
        <div className="hour">10:30</div>
      </div>
      <div className="reporting_link" onClick={openReportingModal}>
        עיכוב? בעיה
      </div>
      <Reporting />
    </div>
  );
};

export default StudentRoute;
