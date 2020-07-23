import React, { useEffect, useState } from "react";
import LogInValidation from "./component/LogInValidation/LogInValidation";
import "./Screen1.css";
import LogIn from "./component/LogIn/LogIn";
import StudentSettingMenu from "./component/StudentSettingMenu/StudentSettingMenu";
import StudentSettingUpdate from "./component/StudentSettingUpdate/StudentSettingUpdate";
import Splash from "./component/Splash/Splash"
import HomeStation from "./component/HomeStation/HomeStation"
import ParentInvalid from "./component/ParentInvalid/ParentInvalid"
import SendPhoneNumber from "./component/SendPhoneNumber/SendPhoneNumber"
import axios from "axios";
import Password from "antd/lib/input/Password";
import Modal from 'react-modal';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function Screen1() {
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

  const apiRequestphoneNum = (value) => {
    console.log("value" + value);
    const regular = /^[0-9]+$/;

    if (regular.test(value) && value.length === 10) {
      axios
        .post("http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/sms", {
          phone_number: `${value}`,
        })

        .then((res) => {
          console.log(res);
          setValidationObject({
            phoneNum: value,
            phoneNumValid: 1,
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
          phoneNumValid: 1,
          password: password,
          passwordValid: typeof res.data,
          phoneNumberParent: 0,
          ParentAcceptsStudent: 0,
        });
      });
  };

  return (
    <div className="screen1">
      {/* <Splash/> */}
    
        { <LogIn check={apiRequestphoneNum} message={validationObject} setPhoneNum = {setValidationObject} /> }
      
      
        {/* <LogInValidation check={apiRequestPassword} sendPasswordAgain = {apiRequestphoneNum} dataObject = {validationObject}
         phoneNum =  {validationObject.phoneNum} password = {validationObject.password}/> */}
     
       {/* <StudentSettingMenu /> */}
      <StudentSettingUpdate
        check={apiRequestphoneNum}
        message={validationObject}
      />
      {/* <HomeStation/> */}
      {/* <SendPhoneNumber check={apiRequestphoneNum} message={validationObject} setPhoneNum = {setValidationObject} />  */}
    </div>
  );
}

export default Screen1;
