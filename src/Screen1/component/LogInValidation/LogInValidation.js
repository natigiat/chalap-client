import React from "react";
import { Input, Form, Checkbox, Button } from "antd";
import { OmitProps } from "antd/lib/transfer/ListBody";

<<<<<<< HEAD:src/Screen1/component/LogInValidation/LogInValidation.js
const LogInValidation = (props) => {
=======
const LogInValidation = () => {
>>>>>>> e7793b2e1d78212a479623dd96e47a5d5e2bfa16:src/Screen1/component/Password/Password.js
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 25 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 0 },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(values[""]);
    props.check(values[''],'LogInValidation');
    console.log(props.message);
    
  };
  // const sendMessage = () =>{
  //     props.message(values['']);
  // }
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
      {/* <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item> */}

      <h4>הכנס סיסמה</h4>
      <Form.Item
        label=""
        name=""
        rules={[{ required: true, message: "הכנס סיסמה" }]}
      >
        <Input.Password  />
        {props.message && <h5>הסיסמא חייבת להכיל לפחות 5 תויים</h5>}
      </Form.Item>
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>זכור אותי</Checkbox>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit"  >
          הירשם
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LogInValidation;
