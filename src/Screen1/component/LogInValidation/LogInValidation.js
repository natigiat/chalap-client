import React from "react";
import { Input, Form, Checkbox, Button } from "antd";
import { OmitProps } from "antd/lib/transfer/ListBody";
import '../LogInValidation/LogInValidation.css';

const LogInValidation = (props) => {
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 5 },
  };
  const tailLayout = {
    wrapperCol: { offset: 10, span: 3 },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(values["password"]);
    props.check(values["password"]);
    props.checkFn(values["password"]);
    console.log(props.passwordStatus);
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
        <h3>הזן את הקוד שנשלח לנייד</h3>
        {props.passwordStatus === true ? '' : <h5>סיסמה שגוייה</h5>}

        <Form.Item className= "firstiput"
          label=""
          name="password"
          rules={[{ required: true, message: "הכנס סיסמה" }]}
        >
          <Input.Password />
        </Form.Item>
        
        <Form.Item {...tailLayout}>
          
          <Button className = 'sendPassword' type="primary" htmlType="submit" >
            שלח
          </Button>
        
        </Form.Item>
        <Button type="primary" className="auth-btn">לא קיבלתי </Button>
    
      </Form>
    </div>
  );
};

export default LogInValidation;
