import React, { useEffect, useState } from "react";
import LogInValidation from "./component/LogInValidation/LogInValidation";
import "./Screen1.css";
import LogIn from "./component/LogIn/LogIn";
import StudentSettingMenu from "./component/StudentSettingMenu/StudentSettingMenu";

function Screen1() {
  const [errorDemoToPassword, setErrorDemoToPassword] = useState(false);
  const [errorDemoToNumPhon, setErrorDemoToNumPhon] = useState(false);
  window.document.title = "Bootcamp";

  const Demoserver = (value, from) => {
    if (value.length < 5 && from === "LogInValidation") {
      setErrorDemoToPassword(true);
    } else if (value.length >= 5 && from === "LogInValidation") {
      setErrorDemoToPassword(false);
    }
    if (value.length < 5 && from === "LogIn") {
      setErrorDemoToNumPhon(true);
    } else if (value.length >= 5 && from === "LogIn") {
      setErrorDemoToNumPhon(false);
    }
  };
  return (
    <div className="screen1">
      <LogIn check={Demoserver} message={errorDemoToNumPhon} />
      <br></br>
      <LogInValidation check={Demoserver} message={errorDemoToPassword} />
      {/* <StudentSettingMenu /> */}
    </div>
  );
}

export default Screen1;
