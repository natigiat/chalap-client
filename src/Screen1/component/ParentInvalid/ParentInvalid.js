import React, { useState } from "react";
import { Input, Form, Button } from "antd";
import "./ParentInvalid.css";

const ParentInvalid = (props) => {
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
        <h4 className="ParentInvalidHeader">? לא קיבלת קוד התקשר למועצה</h4>
      </div>

      <a className="call" href="tel:+1800229933">
        התקשר
      </a>
    </Form>
  );
};

export default ParentInvalid;