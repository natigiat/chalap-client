import React from "react";
import "./ShuttleTravelRoute.css";
import Reporting from "./Reporting";
import { Divider, Timeline } from "antd";
import { ClockCircleOutlined, LeftOutlined } from "@ant-design/icons";

const ShuttleTravelRoute = (props) => {
  return (
    <div className="ShuttleTravelRoute">
      <div className="path">
        <span className="starting_point">תחנת דלק מכמש</span>
        <span className="arrow"> ------- </span>
        <span className="end_point">חן עפרה</span>
      </div>

      <div className="hours">
        <div className="hour">8:30</div>
        <div className="hour">9:30</div>
        <div className="hour">10:30</div>
      </div>
      <div className="reporting">עיכוב? בעיה</div>
    </div>
  );
};

export default ShuttleTravelRoute;
