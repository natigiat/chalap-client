import React, { useState } from "react";
import { Input, Form, Button } from "antd";
import "./SetPhoneNumber.css";

const SendPhoneNumber = (props) => {
  const [visabilityInput, setVisabilityInput] = useState(false);
  const layout = {
    labelCol: { span: 90 },
    wrapperCol: { span: -10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    console.log("Success:", values.username);
    props.setPhoneNum(values.username);
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
      <div>
        <h1>,אופס</h1>
        <h4>לא מצאנו אותך במערכת...</h4>
      </div>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          className="sendPhoneNumber"
          onClick={() => setVisabilityInput(true)}
        >
          אני תלמיד
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="sendPhoneNumber">
          אני הורה
        </Button>
      </Form.Item>

      {visabilityInput && (
        <div>
          <h4>עליך לקבל הרשאת הורה</h4>
          <h4>אנא הזן מספר טלפון של אחד ההורים</h4>

          <Form.Item name="username" rules={[{ required: false, message: "" }]}>
            <Input className="PhoneInput" placeholder="הזן מספר טלפון" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="sendPhoneNumber"
            >
              שלח
            </Button>
          </Form.Item>
        </div>
      )}
    </Form>
  );
};

export default SendPhoneNumber;