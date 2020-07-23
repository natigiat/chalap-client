import React, { useState } from "react";
import { Button } from "antd";

function Pdetails(props) {
  return (
    <div>
      <div className="kidsdetails">
        <h2>{props.address}</h2>
        <div></div>
        <div className="kidsdetails"> {props.school}</div>
        <div>{props.phone}</div>{" "}
        <span onClick={console.log("callmy")}>הרשמה</span>
      </div>
    </div>
  );
}

export default Pdetails;
