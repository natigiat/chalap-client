import React from "react";
import "./Login.css";
import { Form, Input, Button, Checkbox, Select } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LogIn = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <span>
      <span classsName="parentDiv1">
        <h1 className="text1"> הרשאה לתלמיד</h1>
        <br></br>
        <br></br>
        <h3 className="text2"> מעוניין לרשום את ילדך במערכת?</h3>
        <h3 className="text3"> הזן את מספרי הטלפון שלהם </h3>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            className="selectChild"
            label="Select"
            name="name"
            rules={[{ required: true, message: "הכנס את" }]}
          >
            <Select>
              <Select.Option value="demo">שם הילד</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label=" "
            name="tel"
            rules={[{ required: true, message: " הכנס את מספר הטלפון  " }]}
          >
            <Input className="setPhoneNumber" />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox className="rememberMe">זכור אותי</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              className="submitLoginChild"
            >
              שלח
            </Button>
          </Form.Item>
        </Form>
        <br></br>
        <br></br>

        <h6 className="after">
          {" "}
          לאחר הזנת המספר במערכת תשלח הודעה אל הילד עם סיסמה וקוד אימות{" "}
        </h6>
      </span>
    </span>
  );
};

export default LogIn;
