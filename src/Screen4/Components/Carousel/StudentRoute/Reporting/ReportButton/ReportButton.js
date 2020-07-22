import React from "react";
import "./ReportButton.css";

const ReportButton = (props) => {
  return (
    <div>
      <div className="RPbutton">
        <img src={props.img} alt="" className="RPimg" />
        <div className="RPtitle">{props.title}</div>
      </div>
    </div>
  );
};

export default ReportButton;
