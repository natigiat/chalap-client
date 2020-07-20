import React from "react";
import Password from "./Password/Password";
import "./Screen1.css";
import NumPhon from "./component/NumPhone/NumPhoe";

function Screen1() {
  {
    window.document.title = "Bootcamp";
  }
  return (
    <div className="screen1">
      <NumPhon className="numPhone" />
      <Password className="Password" />
    </div>
  );
}

export default Screen1;
