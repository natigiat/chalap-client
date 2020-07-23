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

  const onFinish = (values) => {
    console.log("Success:", values.username);
    // props.setPhoneNum(values.username);
    props.check(values.username);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
 const iAmStudent = () =>{
   setVisabilityInput(1)
 }
 const iAmParent = () =>{
  setVisabilityInput(2)
}
  return (
    <Form
      
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <image src='./images\error img.png'></image>
          
      <div>
        <h1>,אופס</h1>
        <h4>לא מצאנו אותך במערכת...</h4>
      </div>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          className="sendPhoneNumber"
          onClick={iAmStudent}
        >
          אני תלמיד
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="sendPhoneNumber" onClick = {iAmParent}>
          אני הורה
        </Button>
      </Form.Item>

      {visabilityInput ===1 && (
        <div>
          <h4>עליך לקבל הרשאת הורה</h4>
          <h4>אנא הזן מספר טלפון של אחד ההורים</h4>

          <Form.Item name="username" rules={[{ required: false, message: "" }]}>
            <Input className="PhoneInput" placeholder="הזן מספר טלפון" />
          </Form.Item>
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
      {visabilityInput ===2 && <Moked/>}
    </Form>
  );
};
//props.sendPasswordAgain(props.dataObject.phoneNum)
export default SendPhoneNumber;