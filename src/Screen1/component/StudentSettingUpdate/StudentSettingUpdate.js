import React from "react";
import { Input, Form, Checkbox, Button, Select } from "antd";
import "./StudentSettingUpdate.css";

const StudentSettingUpdate = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const LogIn = () => {};
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div classsName="parentDiv1">
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
          label=""
          name="name"
          rules={[{ required: true, message: "הכנס את שם הילד" }]}
        >
          <Select className="selectChild" />
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
          <Button type="primary" htmlType="submit" className="submitLoginChild">
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
    </div>
  );
};

export default StudentSettingUpdate;
