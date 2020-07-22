import React from "react";
import { Input, Form, Checkbox, Button } from "antd";
import { OmitProps } from "antd/lib/transfer/ListBody";
import "../LogInValidation/LogInValidation.css";

const LogInValidation = (props) => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 25 },
  };
  const tailLayout = {
    wrapperCol: { offset: 10, span: 3 },
  };

  const onFinish = (values) => {
    console.log("Success:", values.password);
    // props.setPhoneNum(props.message.Password =values);
    props.check(values.password);
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
        {props.passwordCheck === false ? "" : <h5>סיסמה שגוייה</h5>}

        <Form.Item
          label=""
          name="password"
          rules={[{ required: true, message: "הכנס סיסמה" }]}
        >
          <Input.Password className="passwordInput" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          
          <Button className='sendPassword' type="primary" htmlType="submit" onClick = {props.check} >
            שלח
          </Button>
        </Form.Item>
        <Button type="primary" className="auth-btn">
          לא קיבלתי{" "}
        </Button>
      </Form>
    </div>
  );
};

export default LogInValidation;
