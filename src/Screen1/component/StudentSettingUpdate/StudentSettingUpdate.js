import React, { useState } from "react";
import { Input, Form, Checkbox, Button, Select } from "antd";
import "./StudentSettingUpdate.css";

const StudentSettingUpdate = (props) => {
  const [rander, setRander] = useState(0);
  const [StudentName, setStudentName] = useState([]);

  const layout1 = {
    labelCol: { span: 90 },
    wrapperCol: { span: -10 },
  };
  const tailLayout1 = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const inputValue = 0;

  const onFinish = (values) => {
    console.log(values);
    const regular = /^[0-9]+$/;
    if (regular.test(values.phonenumber) && values.phonenumber.length === 10) {
      console.log("Success:", values.phonenumber);
      props.check(values.phonenumber);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //regular input functions
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 25 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 0 },
  };
  // slect input functions

  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <Form
      className="PhoneContainer"
      {...layout1}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h2>הרשאה לתלמיד</h2>
      <h3>?מעוניין לרשום את ילדך למערכת</h3>
      {/* select input */}
      <div className="btnSelect">
        <Select
          showSearch
          style={{ width: 173, border: " 1px solid black" }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {StudentName.map((student) => (
            <Option value={student}>{student}</Option>
          ))}
        </Select>
      </div>
      <br></br>
      <Form.Item
        className="firstiput"
        name="username"
        rules={[{ required: true, message: "הכנס בבקשה מספר טלפון" }]}
      >
        <Input className="PhoneInput" placeholder="הזן מספר טלפון" />
      </Form.Item>
      <Form.Item {...tailLayout1}>
        <Button type="primary" htmlType="submit" className="sendPass">
          שלח סיסמה
        </Button>
      </Form.Item>
      <Form.Item>
        {/* {props.message === "incorrect" && (
          <div className="error">המספר אינו קיים במערכת</div>
        )}
        {props.message === "correct" && (
          <div className="messegeSend">נשלחה סיסמה לטלפון שלך</div>
        )} */}
      </Form.Item>
    </Form>
  );
};

export default StudentSettingUpdate;
