import React from "react";
import { Input, Form, Checkbox, Button } from "antd";
import "./StudentSettingUpdate.css";

const StudentSettingUpdate = () => {
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
    <div className="studentSettingUpdate">
      <span className="textx">X</span>
      <span className="text1">הרשאה לתלמיד</span>
      <span className="text2">
        ?מעוניין לרשום את ילדך למערכת
        <br></br>
        הזן את מספרי הטלפון שלהם
      </span>

      <Form.Item {...tailLayout}>
        <Button type="primary" name="jhg" className="btnlater">
          הגדר
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" name="jhg" className="btnFence">
          אחר כך
        </Button>
      </Form.Item>
      <span className="text3">לאחר הזנת הטלפון ישלח אל הילד sms עם הקוד</span>
    </div>
  );
};

export default StudentSettingUpdate;
