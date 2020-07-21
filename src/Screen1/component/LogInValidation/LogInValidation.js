import React from "react";
import { Input, Form, Checkbox, Button } from "antd";
import { OmitProps } from "antd/lib/transfer/ListBody";

const LogInValidation = (props) => {
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 10, span: 3 },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(values["password"]);
    props.check(values["password"], "LogInValidation");
    console.log(props.message);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="logInValidation">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {props.message === "incorrect" ? <h5>password is too short</h5> : ""}

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
    </div>
  );
};

export default LogInValidation;
