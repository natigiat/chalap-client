import React from "react";
import { Input, Form, Checkbox, Button } from "antd";

const LogIn = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
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
      log in
      <Form.Item
        // label="Username"
        // name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        
        
      </Form.Item>
      <Form.Item
        // label="Password"
        // name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <h4>enter phone number</h4>
        <Input.Password />
      </Form.Item>
      
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LogIn;
