import React, { useState } from "react";
import { Input, Form, Checkbox, Button } from "antd";

const LogIn = (props) => {
  const layout = {
    labelCol: { span: 90 },
    wrapperCol: { span: -10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [rander, setRander] = useState(0);

  const onFinish = (values) => {
    console.log("Success:", values);
    props.check(values.username, "LogIn");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="logIn">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h4>הכנס מספר טלפון</h4>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "הכנס בבקשה מספר טלפון" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            שלח סיסמה
          </Button>
        </Form.Item>
        <Form.Item>
          {props.message === "incorrect" && <div>המספר אינו קיים במערכת</div>}
          {props.message === "correct" && <div>נשלחה סיסמה לטלפון שלך</div>}
        </Form.Item>
      </Form>
    </div>
  );
};

export default LogIn;
