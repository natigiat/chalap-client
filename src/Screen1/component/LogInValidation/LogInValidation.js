import React from "react";
import { Input, Form, Checkbox, Button } from "antd";

const LogInValidation = () => {
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 3},
  };
  const tailLayout = {
    wrapperCol: { offset: 10, span: 3 },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
<<<<<<< HEAD
=======
    console.log(values["password"]);
    props.check(values["password",'LogInValidation']);
    console.log(props.message);
>>>>>>> a745b8b65a040324a0494f65dc799940af0974de
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
    
    
      <Form.Item
        label=""
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LogInValidation;
