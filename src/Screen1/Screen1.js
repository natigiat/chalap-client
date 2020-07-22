import React, { useEffect, useState } from "react";
import LogInValidation from "./component/LogInValidation/LogInValidation";
import "./Screen1.css";
import LogIn from "./component/LogIn/LogIn";
import StudentSettingMenu from "./component/StudentSettingMenu/StudentSettingMenu";
import StudentSettingUpdate from "./component/StudentSettingUpdate/StudentSettingUpdate";
import axios from "axios";
import Password from "antd/lib/input/Password";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function Screen1() {
  const [PasswordCheck, setPasswordCheck] = useState(false);
  const [DemoToNumPhon, setDemoToNumPhon] = useState(false);
  const [phoneNum, setphoneNum] = useState([0, 0]);
  window.document.title = "Bootcamp";

  const passwordCheckFn = (password) => {
    const regular = /^[0-9]+$/;

    if (password.length < 4 || password.length > 4 || !regular.test(password)) {
      setPasswordCheck(true);
    }

    if (password.length === 4 && regular.test(password)) {
      setPasswordCheck(false);
    }
  };

  const apiRequestphoneNum = (value) => {
    const regular = /^[0-9]+$/;

    if (regular.test(value) && value.length === 10) {
      axios
        .post("http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/sms", {
          phone_number: `${value}`,
        })

        .then((res) => {
          console.log(res);
          setphoneNum([value, res.data.send]);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("ata idiot");
    }
  };

  //send post request in login validation
  const apiRequestPassword = (password) => {
    if (!PasswordCheck) {
      axios
        .post(
          "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/sms/validate",
          {
            phone_number: `${phoneNum}`,
            one_time_password: `${password}`,
          }
        )

        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      console.log("nichnas la post sisma");
      console.log(phoneNum[0], password);
    }
    console.log("lo nichnas la post sisma");
    console.log(phoneNum[0], password);
  };

  return (
    <div className="page">
      <div>
        {
          <LogIn
            check={apiRequestphoneNum}
            message={DemoToNumPhon}
            setPhoneNum={setphoneNum}
          />
        }
      </div>
      <br></br>
      <div>
        <LogInValidation
          check={apiRequestPassword}
          passwordCheck={PasswordCheck}
          checkFn={passwordCheckFn}
          phoneNum={phoneNum}
          password={PasswordCheck}
        />
      </div>
      <StudentSettingMenu />
      <StudentSettingUpdate
        check={apiRequestphoneNum}
        message={DemoToNumPhon}
      />
      {phoneNum[1] === 1 && (
        <Router>
          <Redirect to="./LogInValidation">logInValidation</Redirect>
        </Router>
      )}
    </div>
  );
}

export default Screen1;
