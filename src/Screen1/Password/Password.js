import React from "react";
import { Input, Form, Checkbox, Button } from "antd";

const Password = () => {
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 25 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 0 },
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
<<<<<<< HEAD
      {/* <Form.Item
=======
      Password
      <Form.Item
>>>>>>> 8969c30fba511717c89f5ff19a2f0322c6afa7d7
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
<<<<<<< HEAD
      </Form.Item> */}

        <h4>הכנס סיסמה</h4>
=======
      </Form.Item>
>>>>>>> 8969c30fba511717c89f5ff19a2f0322c6afa7d7
      <Form.Item
        label=""
        name=""
        rules={[{ required: true, message: "הכנס סיסמה" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>זכור אותי</Checkbox>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          הירשם
        </Button>
      </Form.Item>
    </Form>
    
  );
};

export default Password;
