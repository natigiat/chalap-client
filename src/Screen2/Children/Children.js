import React, { useState } from "react";
import { Button } from "antd";
import "./Children.css";

function Children(props) {
  return (
    <div className="children">
      <div className="child">
        <div className="name">{props.name}</div>
        <div className="school">{props.school}</div>
        <div className="phone"> {props.phone}</div>
      </div>
    </div>
  );
}

export default Children;
