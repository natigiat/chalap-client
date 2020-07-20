import React, { useEffect, useState } from "react";
import LogInValidation from "./component/LogInValidation/LogInValidation";
import "./Screen1.css";
import LogIn from "./component/LogIn/LogIn";

function Screen1() {
  const [errorDemoToPassword, setErrorDemoToPassword] = useState(false);
  const [errorDemoToNumPhon, setErrorDemoToNumPhon] = useState(false);
  window.document.title = "Bootcamp";

  const Demoserver = (value, from) => {
    if (value.length < 5 && from === 'LogInValidation') {
      setErrorDemoToPassword(true);
    }
    if (value.length < 5 && from === 'LogIn') {
      setErrorDemoToNumPhon(true);
    }
  };
  return (
    <div className="screen1">
      <LogIn check={Demoserver} message={errorDemoToNumPhon} />
      <LogInValidation check={Demoserver} message={errorDemoToPassword} />
    </div>
  );
}

export default Screen1;
