import React, { useState } from "react";
import "./Children.css";

function Children(props) {
  return (
    <div className="child" onClick={props.catchChild}>
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
