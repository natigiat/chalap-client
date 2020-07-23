import React, { useState } from "react";
import { Input, Form, Checkbox, Button } from "antd";
import "./LogIn.css";
import SendPhoneNumber from '../SendPhoneNumber/SendPhoneNumber';
import Popup from "reactjs-popup";
import '../SendPhoneNumber/SendPhoneNumber.css';

const LogIn = (props) => {
  const layout = {
    labelCol: { span: 90 },
    wrapperCol: { span: -10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [valid, setValid] = useState(true);
  const [valid1, setValid1] = useState(true);
  const [change, setChange] = useState("");

  const onFinish = (values) => {
    console.log(values);
    const regular = /^[0-9]+$/;
    if (regular.test(values.phonenumber) && values.phonenumber.length === 10) {
      console.log("Success:", values.phonenumber);
      props.check(values.phonenumber);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validationInput = (changedValues) => {
    const regular = /^[0-9]+$/;
    const validation = regular.test(changedValues.phonenumber);
    if (!validation) {
      setValid(false);
    } else if (valid === false) {
      setValid(true);
      console.log(valid);
    }
    if (changedValues.phonenumber.length > 10) {
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
    >
      <h1>!שלום</h1>
      <h4>על מנת להרשם למערכת הזינו בבקשה את מספר הטלפון שלכם</h4>
      <Form.Item
        name="phonenumber"
        rules={[{ required: true, message: "הכנס בבקשה מספר טלפון" }]}
      >
        <Input className="PhoneInput" placeholder="הזן מספר טלפון" />
      </Form.Item>
      {!valid && <div>יש להזין מספרים בלבד</div>}
      {!valid1 && valid && <div>אין להזין יותר מ-10 ספרות</div>}


      <Popup
        modal
        trigger={    <Button
          className="sendPassword"
          type="primary"
          htmlType="submit"
          onClick={props.check}
        >
         שלח לי קוד
        </Button>}
        position="center center"
        contentStyle={{
          margin: "auto",
          padding: "auto",
          width: 260,
          height: 428,
        }}
      >
        {(close) => (
         <div>
           {/* <img className = 'popUpImage' src = '\images\Error img.png'></img>
           <div className = 'popUpText'>
             <h3>אופס ..</h3>
             <h3>לא מצאנו אותך במערכת</h3>
           </div>
           

           <Button
          type="primary"
          htmlType="submit"
          className="sendPhoneNumberStudentBtn"
          
        >
          אני תלמיד
        </Button>

  
        <Button type="primary" htmlType="submit" className="sendPhoneNumberParentBtn">
          אני הורה
        </Button> */}
            <SendPhoneNumber/>
         
         </div>
        )}
      </Popup>

      
      <Form.Item>
        {props.message.phoneNumValid === 2 && (
          <div className="error">המספר אינו קיים במערכת</div>
        )}
        {props.message.phoneNumValid === 1 && (
          <div className="messegeSend">נשלחה סיסמה לטלפון שלך</div>
        )}
        {props.message.phoneNumValid === 3 && (
          <div className="messegeSend">המספר לא נשלח, אנא נסה שנית</div>
        )}
      </Form.Item>
      <h6 className="LogInDescriptionText">
        לאחר הזנת מספר הטלפון יישלח אליכם מסרון עם קוד אימות
      </h6>
    </Form>
  );
};

export default LogIn;

