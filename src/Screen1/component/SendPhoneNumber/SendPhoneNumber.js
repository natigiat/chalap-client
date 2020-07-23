import React, { useState } from "react";
import { Input, Form, Button } from "antd";
import "./SendPhoneNumber.css";
import Moked from '../Moked/Moked.js';

const SendPhoneNumber = (props) => {
  const [visabilityInput, setVisabilityInput] = useState(0);
  const [parentVisibility ,setParentVisibility] = useState(false);
  const layout = {
    labelCol: { span: 90 },
    wrapperCol: { span: -10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };


 const iAmStudent = () =>{
   setVisabilityInput(1)
 }
 const iAmParent = () =>{
  setVisabilityInput(2)
}
const [valid, setValid] = useState(true);
const [valid1, setValid1] = useState(true);
const [change, setChange] = useState("");
const [checkPopup, setCheckPopup] = useState(false);


const onFinish = (values) => {
  console.log(values);
  const regular = /^[0-9]+$/;
  if (regular.test(values.phoneNumber) && values.phoneNumber.length === 10&&values.phoneNumber!==5) {
    console.log("Success:", values.phoneNumber);
    props.check(values.phoneNumber);
  }else {setCheckPopup(true)

  }
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const validationInput = (changedValues) => {
  const regular = /^[0-9]+$/;
  const validation = regular.test(changedValues.phoneNumber);
  if (!validation  && changedValues.phoneNumber.length > 0) {
    setValid(false);
  } else if (valid === false) {
    setValid(true);
    console.log(valid);
  }
  if (changedValues.phoneNumber.length > 10) {
    setValid1(false);
  } else if (valid1 === false) {
    setValid1(true);
    console.log(valid1);
  }
};
const onchange = () => {
  setChange(change);
 
};
  return (
    <Form
      
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={validationInput}
      onFieldsChange={onchange}
      className = 'sendPhoneNumberContainer'
    >
      <img className = 'img' src = './images/error img.png'></img>
          
      <div className = 'SendPhoneNumberHeader'>
        <h1>,אופס</h1>
        <h4>לא מצאנו אותך במערכת...</h4>
      </div>
        <div className = 'btnFlex'>
        <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          className="sendPhoneNumber"
          onClick={iAmStudent}
          className = 'StudentBtn'
        >
          אני תלמיד
        </Button>
        </Form.Item>
        <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          className="sendPhoneNumber"
          onClick={iAmParent}
          className = 'StudentBtn'
        >
          אני הורה
        </Button>
      </Form.Item>
        </div>
     

      {visabilityInput ===1 && (
        <div>
          <h4>עליך לקבל הרשאת הורה</h4>
          <h4>אנא הזן מספר טלפון של אחד ההורים</h4>

          <Form.Item name="phoneNumber" rules={[{ required: false, message: "" }]}>
            <Input className="PhoneInput" placeholder="הזן מספר טלפון" />
          </Form.Item>
          {!valid && <div>יש להזין מספרים בלבד</div>}
      {!valid1 && valid && <div>אין להזין יותר מ-10 ספרות</div>}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="sendPhoneNumber"
              onClick = {onFinish}
            >
              שלח
            </Button>
          </Form.Item>
        </div>
      )}
      {visabilityInput ===2 && <div style={{position : "relative"}}><Moked/> </div>}
    </Form>
  );
};
//props.sendPasswordAgain(props.dataObject.phoneNum)
export default SendPhoneNumber;