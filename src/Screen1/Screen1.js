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
  Redirect
} from "react-router-dom";

function Screen1() {
  const [PasswordCheck, setPasswordCheck] = useState(false);
  const [DemoToNumPhon, setDemoToNumPhon] = useState(false);
<<<<<<< HEAD
  const [phoneNum, setphoneNum] = useState([0,0]);
  window.document.title = "Bootcamp";

  const passwordCheckFn = (password) =>{
    const regular = /^[0-9]+$/;
    
    if(password.length < 4|| password.length > 4 || !regular.test(password)  ){
      setPasswordCheck(true)
    }
    
    if(password.length === 4 && regular.test(password)){
=======
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
>>>>>>> fdc3c56a965a9467c1dace39f2e3f96cee2e3e62
      setPasswordCheck(false);
    }
  };

  const apiRequestphoneNum = (value) => {
<<<<<<< HEAD
    const regular = /^[0-9]+$/;

    if(regular.test(value) && value.length === 10){
      axios.post( "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/sms",{
        "phone_number": `${value}`
      })
        
        .then(res=>{
          console.log(res)
          setphoneNum([value,res.data.send])
          })
        .catch(err=>console.log(err))
      }else{
        console.log('ata idiot');
      }
    
  }
   

  //send post request in login validation
  const apiRequestPassword = (password) => {

        if(!PasswordCheck){
          axios.post( "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/sms/validate",{

            "phone_number": `${phoneNum}`,
            "one_time_password": `${password}`
          }
         )
           
           .then(res=>{
             console.log(res)
             
            })
           .catch(err=>console.log(err))
            console.log('nichnas la post sisma')
            console.log(phoneNum[0],password);
        }
        console.log('lo nichnas la post sisma');
        console.log(phoneNum[0],password);
     
    
=======
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
>>>>>>> fdc3c56a965a9467c1dace39f2e3f96cee2e3e62
  };

  return (
<<<<<<< HEAD
    <div className="page">
      
    
      <div>
        { <LogIn check={apiRequestphoneNum} message={DemoToNumPhon} setPhoneNum = {setphoneNum} /> }
      </div>
      <br></br>
      <div>
        <LogInValidation check={apiRequestPassword} passwordCheck={PasswordCheck} checkFn = {passwordCheckFn} phoneNum =  {phoneNum} password ={PasswordCheck}/>
      </div>
      <StudentSettingMenu />
      <StudentSettingUpdate check={apiRequestphoneNum} message={DemoToNumPhon}/>
      {phoneNum[1]===1&&(
      <Router>
        <Redirect to = './LogInValidation'>logInValidation</Redirect>
      </Router>)}


=======
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
>>>>>>> fdc3c56a965a9467c1dace39f2e3f96cee2e3e62
    </div>
  );
}

export default Screen1;
