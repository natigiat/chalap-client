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
<<<<<<< HEAD
    if (value.length < 5 && from === 'LogInValidation') {
      setErrorDemoToPassword(true);
    }
    if (value.length < 5 && from === 'LogIn') {
=======
    if (value.length < 5 && from === "LogInValidation") {
      setErrorDemoToPassword(true);
    }
    if (value.length < 5 && from === "LogIn") {
>>>>>>> e7793b2e1d78212a479623dd96e47a5d5e2bfa16
      setErrorDemoToNumPhon(true);
    }
  };
  return (
    <div className="screen1">
      <LogIn check={Demoserver} message={errorDemoToNumPhon} />
      <LogInValidation check={Demoserver} message={errorDemoToPassword} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <StudentSettingMenu /> */}
    </div>
  );
}

export default Screen1;
