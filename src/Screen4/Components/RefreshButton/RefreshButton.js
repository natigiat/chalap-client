import React from "react";
// import logo from "./logo.svg";
import "./RefreshButton.css";
import { Button } from "antd";

const RefreshButton = (props) => {
  return (
    <Button className="refresh" onClick={props.updateBusLocations}>
      <img className="refreshImg" src="/images/refresh.svg" alt="refresh" />
      ריענון מפה
    </Button>
  );
};

export default RefreshButton;
