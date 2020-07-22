import React, { useEffect, useState } from "react";
import LogInValidation from "./component/LogInValidation/LogInValidation";
import "./Screen1.css";
import LogIn from "./component/LogIn/LogIn";
import StudentSettingMenu from "./component/StudentSettingMenu/StudentSettingMenu";
import StudentSettingUpdate from "./component/StudentSettingUpdate/StudentSettingUpdate";
import Splash from "./component/Splash/Splash";
import axios from "axios";
import Password from "antd/lib/input/Password";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";

function Screen1() {
  const history = useHistory();
  const [PasswordCheck, setPasswordCheck] = useState(false);
  const [DemoToNumPhon, setDemoToNumPhon] = useState(false);
  const [validationObject, setValidationObject] = useState({
    phoneNum: 0,
    phoneNumValid: 0,
    password: 0,
    passwordValid: 0,
    phoneNumberParent: 0,
    ParentAcceptsStudent: 0,
  });

  window.document.title = "Bootcamp";

  const apiRequestphoneNum = (value) => {
    const regular = /^[0-9]+$/;

    console.log("value" + value);

    if (regular.test(value) && value.length === 10) {
      axios
        .post("http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/sms", {
          phone_number: `${value}`,
        })

        .then((res) => {
          console.log(res);
          setValidationObject({
            phoneNum: value,
            phoneNumValid: 2,
            password: 0,
            passwordValid: 0,
            phoneNumberParent: 0,
            ParentAcceptsStudent: 0,
          });
        })
        .catch((err) => console.log(err));
    } else {
      console.log("ata idiot");
    }
  };

  //send post request in login validation
  const apiRequestPassword = (password) => {
    console.log("password" + password);
    axios
      .post(
        "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/sms/validate",
        {
          phone_number: `${validationObject.phoneNum}`,
          one_time_password: `${password}`,
        }
      )

      .then((res) => {
        console.log(res);
        setValidationObject({
          phoneNum: validationObject.phoneNum,
          phoneNumValid: 3,
          password: password,
          passwordValid: typeof res.data,
          phoneNumberParent: 0,
          ParentAcceptsStudent: 0,
        });
      });
  };

  const pageVieww = (page) => {
    console.log(typeof page);
    switch (page) {
      case 0:
        setTimeout(() => {
          setValidationObject({
            phoneNumValid: 1,
          });
        }, 3000);
        return <Splash />;
        break;

      case 1:
        return (
          <LogIn
            check={apiRequestphoneNum}
            message={validationObject}
            setPhoneNum={setValidationObject}
          />
        );
        break;

      case 2:
        return (
          <LogInValidation
            check={apiRequestPassword}
            phoneNum={validationObject.phoneNum}
          />
        );

        break;

      case 3:
        return (
          <StudentSettingMenu
            check={apiRequestPassword}
            phoneNum={validationObject.phoneNum}
          />
        );

        break;

      case 4:
        return (
          <StudentSettingUpdate
            check={apiRequestphoneNum}
            message={validationObject}
          />
        );

        break;

      default:
        break;
    }
  };

  return (
    <div className="page">
      <div>{pageVieww(validationObject.phoneNumValid)}</div>
    </div>
  );
}

export default Screen1;
