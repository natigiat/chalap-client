import React, { useState } from "react";
import { Input, Form, Checkbox, Button, Select } from "antd";
import "./StudentSettingUpdate.css";

const StudentSettingUpdate = (props) => {
  const [rander, setRander] = useState(0);
  const [StudentName, setStudentName] = useState([]);

  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  const inputValue = 0;

  const onFinish1 = (values) => {
    console.log("Success:", values.username);
    props.check(values.username);
  };
  const onFinishFailed1 = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish1}
      onFinishFailed={onFinishFailed1}
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
      <Form.Item>
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

// return (

//     <Form.Item {...tailLayout} className = 'signStudentContainer'>

// <br></br>
// <Form.Item className ="StudentPhoneInput"
//         name="username"
//         rules={[{ required: true, message: "הכנס בבקשה מספר טלפון" }]}
//       >
//         <Input placeholder="הזן מספר טלפון" />
//       </Form.Item>
//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit" className = 'sendPass'>
//           שלח סיסמה
//         </Button>
//       </Form.Item>
//       <Form.Item>
// {/* <Input className = 'StudentPhoneInput' placeholder="הזן מספר טלפון" /> */}
//       <Button type="primary" name="jhg" className="btnlater"> הגדר</Button>
//       <Button type="primary" name="jhg" className="btnFence">אחר כך</Button>

//     </Form.Item>
//     // <span className="text3">לאחר הזנת הטלפון ישלח אל הילד sms עם הקוד</span>
//     </Form.Item>
// );
