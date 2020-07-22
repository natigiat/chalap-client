import React, { useState } from "react";
import { Input, Form, Checkbox, Button } from "antd";
import "./LogIn.css";

const LogIn = (props) => {
  const layout = {
    labelCol: { span: 90 },
    wrapperCol: { span: -10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const inputValue = 0;
  const [rander, setRander] = useState(0);

  const onFinish = (values) => {
    console.log("Success:", values.username);
    props.check(values.username);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="PhoneContainer"
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h1>!שלום</h1>
      <h4>הרשמו על מהת לקבל לורום איפסום. דולור סיט אמט, קונסקטורמח</h4>
      <Form.Item
        className="firstiput"
        name="username"
        rules={[{ required: true, message: "הכנס בבקשה מספר טלפון" }]}
      >
        <Input placeholder="הזן מספר טלפון" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="sendPass">
          שלח סיסמה
        </Button>
      </Form.Item>
      <Form.Item>
        {/* {props.message === "incorrect" && (
            <div className="error">המספר אינו קיים במערכת</div>
          )}
          {props.message === "correct" && (
            <div className="messegeSend">נשלחה סיסמה לטלפון שלך</div>
          )} */}
      </Form.Item>
    </Form>
  );
};

export default LogIn;
