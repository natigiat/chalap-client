import React, { useState } from "react";
import { Input, Form, Checkbox, Button } from "antd";

const LogIn = (props) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [rander, setRander] = useState(0);

  const onFinish = (values) => {
    console.log("Success:", values);
    props.check(values.username, "LogIn");
    setRander(1);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
        {!props.message && rander > 0 && <div>המספר אינו קיים במערכת</div>}
      </Form.Item>
    </Form>
  );
};

export default LogIn;
