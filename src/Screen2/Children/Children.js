import React, { useState } from "react";
import { Button } from "antd";
import "./Children.css";

function Children(props) {
  return (
    <div className="children">
      <div className="child">
        <div className="name">{props.firstName}</div>
        <div>
          <span className="exit"> {props.favoriteStaion}</span>
          <span> ---- </span>
          <span className="school">{props.school}</span>
         
        </div>
      </div>
    </div>
  );
}

export default Children;
