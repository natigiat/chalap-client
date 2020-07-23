import React from "react";
import "./react-timekeeper.css";
import TimeKeeper from "react-timekeeper";

function MyClock(props) {
  return <TimeKeeper hour24Mode onDoneClick={props.onDoneClick} />;
}

export default MyClock;
