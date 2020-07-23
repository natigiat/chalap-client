import React, { useEffect, useState } from "react";
import { Input, Form, Checkbox, Button } from "antd";
import { OmitProps } from "antd/lib/transfer/ListBody";
import "../LogInValidation/LogInValidation.css";

const LogInValidation = (props) => {
  const [PasswordCheck, setPasswordCheck] = useState(false);
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 25 },
  };
  const tailLayout = {
    wrapperCol: { offset: 10, span: 3 },
  };

  const onFinish = (values) => {
    const check = /^[0-9]+$/;
    console.log("Success:", values.password);
    if (values.password.length === 4 && check.test(values.password)) {
      setPasswordCheck(false);
      props.check(values.password);
      console.log(PasswordCheck);
    } else {
      setPasswordCheck(true);
    }
    console.log(PasswordCheck);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="logInValidation">
      <Form
        className="passwordContainer"
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h3 className="logInValidationHeader">הזן את הקוד שנשלח לנייד</h3>

        {PasswordCheck && <h5>סיסמה שגוייה</h5>}

        <Form.Item
          label=""
          name="password"
          rules={[{ required: true, message: "הכנס סיסמה" }]}
        >
          <Input.Password className="passwordInput" placeholder="..." />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            className="sendPassword"
            type="primary"
            htmlType="submit"
            onClick={props.check}
          >
            שלח
          </Button>
        </Form.Item>
        <div className="auth-btn1"> לא קיבלתי קוד אנא שילחו לי שוב</div>
      </Form>
    </div>
  );
};

export default LogInValidation;
