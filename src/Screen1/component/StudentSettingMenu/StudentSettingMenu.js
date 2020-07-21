import React from "react";
import { Input, Form, Checkbox, Button } from "antd";
import "./StudentSettingMenu.css";

const StudentSettingMenu = () => {
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
    <div className="studentSettingMenu">
      <span className="textx">X</span>
      <span className="text1">בואו לדייק את ההסעות של ילדכם</span>
      <span className="text2">תוכל להגדיר מחדש גם בהמשך</span>

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
    </div>
  );
};

export default StudentSettingMenu;
