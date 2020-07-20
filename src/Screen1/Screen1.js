import React, { useEffect, useState } from "react";
import Password from "./component/Password/Password";
import "./Screen1.css";
import NumPhon from "./component/NumPhone/NumPhoe";

function Screen1() {
  const [errorDemoToPassword, setErrorDemoToPassword] = useState(false);
  const [errorDemoToNumPhon, setErrorDemoToNumPhon] = useState(false);
  window.document.title = "Bootcamp";

  const Demoserver = (value, from) => {
    if (value.length < 5 && from === Password) {
      setErrorDemoToPassword(true);
    }
    if (value.length < 5 && from === NumPhon) {
      setErrorDemoToNumPhon(true);
    }
  };
  return (
    <div className="screen1">
      <NumPhon check={Demoserver} message={errorDemoToNumPhon} />
      <Password check={Demoserver} message={errorDemoToPassword} />
    </div>
  );
}

export default Screen1;
