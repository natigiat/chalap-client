import React, { useEffect, useState } from "react";
import LogInValidation from "./component/LogInValidation/LogInValidation";
import "./Screen1.css";
import LogIn from "./component/LogIn/LogIn";
import StudentSettingMenu from "./component/StudentSettingMenu/StudentSettingMenu";
import StudentSettingUpdate from "./component/StudentSettingUpdate/StudentSettingUpdate";
import axios from "axios";
import Password from "antd/lib/input/Password";

function Screen1() {
  const [PasswordCheck, setPasswordCheck] = useState(false);
  const [DemoToNumPhon, setDemoToNumPhon] = useState(false);
  const [phoneNum, setphoneNum] = useState(null);

  const [StudentName, setStudentName] = useState([]);
  window.document.title = "Bootcamp";

  useEffect(() => {
    axios
      .get(
        "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/students/family/2"
      )
      .then(function (response) {
        console.log(response.data);
        setStudentName(response.data);
      });
  }, []);

  const passwordCheckFn = (password) => {
    if (password.length < 4 || password.length > 4) {
      setPasswordCheck(true);
    }

    if (password.length === 4) {
      setPasswordCheck(false);
    }
  };

  const apiRequestphoneNum = (value) => {
    axios
      .post("http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/sms", {
        phone_number: `${value}`,
      })

      .then((res) => {
        console.log(res);
        setphoneNum(value);
      })
      .catch((err) => console.log(err));
  };
  const apiRequestPassword = (Password) => {
    axios
      .post(
        "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/sms/validate",
        {
          phone: `${phoneNum}`,
          one_time_password: `${Password}`,
        }
      )

      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="screen1">
      {/* <button onClick={() => console.log(StudentName)}>axios</button> */}
      <div>{<LogIn check={apiRequestphoneNum} message={DemoToNumPhon} />}</div>
      <br></br>
      <div>
        <LogInValidation
          check={apiRequestPassword}
          passwordCheck={PasswordCheck}
          checkFn={passwordCheckFn}
        />
      </div>
      <StudentSettingMenu />
      <StudentSettingUpdate
        check={apiRequestphoneNum}
        message={DemoToNumPhon}
      />
    </div>
  );
}

export default Screen1;
