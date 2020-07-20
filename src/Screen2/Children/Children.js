import React, { useState } from "react";
import { Button } from "antd";
import "./Children.css";

function Children(props) {
  return (
    <div className="child" onClick={props.catchild}>
      <div className="name">{props.name}</div>
      <div>
        <span className="exit"> {props.exit}</span>
        <span> ----> </span>
        <span className="school">{props.school}</span>
      </div>
    </div>
  );
}

export default Children;
