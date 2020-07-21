import React, { useEffect, useState } from "react";
import LogInValidation from "./component/LogInValidation/LogInValidation";
import "./Screen1.css";
import LogIn from "./component/LogIn/LogIn";
import StudentSettingMenu from "./component/StudentSettingMenu/StudentSettingMenu";
import StudentSettingUpdate from "./component/StudentSettingUpdate/StudentSettingUpdate";

function Screen1() {
  const [DemoToPassword, setDemoToPassword] = useState(false);
  const [DemoToNumPhon, setDemoToNumPhon] = useState(false);
  window.document.title = "Bootcamp";

  const Demoserver = (value, from) => {
    if (value.length < 5 && from === "LogInValidation") {
      setDemoToPassword("incorrect");
    } else if (value.length >= 5 && from === "LogInValidation") {
      setDemoToPassword("correct");
    }
    if (value.length < 5 && from === "LogIn") {
      setDemoToNumPhon("incorrect");
    } else if (value.length >= 5 && from === "LogIn") {
      setDemoToNumPhon("correct");
    }
  };
  return (
    <div className="page">
      <div>
        <LogIn check={Demoserver} message={DemoToNumPhon} />
      </div>
      <br></br>
      <div>
        <LogInValidation check={Demoserver} message={DemoToPassword} />
      </div>
      {/* <StudentSettingMenu /> */}
      {/* <StudentSettingUpdate /> */}
    </div>
  );
}

export default Screen1;
