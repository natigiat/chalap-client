import React from "react";
import { Input, Form, Checkbox, Button } from "antd";

const LogInValidation = (props) => {
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 10},
  };
  const tailLayout = {
    wrapperCol: { offset: 10, span: 3 },
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
      {/* <div className = 'algincenter'> */}
    <h4>enter password</h4>
    {props.message ?<h5>password is too short</h5> : ''}
    
      <Form.Item
        
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      {/* </div> */}
    </Form>
  );
};

export default LogInValidation;
