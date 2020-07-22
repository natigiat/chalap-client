import React from "react";
import "./ReportButton.css";
import { Link } from "react-router-dom";
const ReportButton = (props) => {
  return (
    <Link to={`/reports/${props.link}`}>
      <div className="RPbutton">
        <img src={props.img} alt="" className="RPimg" />
        <div className="RPtitle">{props.title}</div>
      </div>
    </Link>
  );
};

export default ReportButton;
