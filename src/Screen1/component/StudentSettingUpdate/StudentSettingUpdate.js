import React, { useEffect, useState } from "react";
import App from "../../../App";
import "./StudentSettingUpdate.css";
import { Form, Input, Button, Select } from "antd";
import axios from "axios";


const StudentSettingUpdate = () => {
  const [StudentStation, setStudentStation] = useState([]);
  const { Option } = Select;
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    console.log(values);
  };
  const onStationChange = (value) => console.log(value);

  return (
    <div className="stations">
      <h1 className="HomeStationHeader">
        {" "}
        עזור לנו למצוא את הנתוניים<br></br> הרלוונטים עבורך
      </h1>

      <h3 className="HomeStationText"> מה תחנת הבית שלכם? </h3>
      <img className="homeLogo" src = './homeLogo' ></img>
      
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        // className="select"
      >
        
        <Select
          placeholder="הקלד תחנת בית..."
          onChange={onStationChange}
          allowClear
        >
          {StudentStation &&
            StudentStation.map((station) => (
              <Option value={station}>{station}</Option>
            ))}
        </Select>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) => {
            return getFieldValue("station") === "other" ? (
              <Form.Item
                name="customizeStation"
                label="Customize Station"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null;
          }}
        </Form.Item>
        <h3 className="dontWorry">
          אל דאגה, <br></br>
          <br></br> תוכל להגדיר עבור כל ילד גם בהמשך
        </h3>
        <Button type="primary" htmlType="submit" className="HomeStationBtn">
          הבא
        </Button>
      </Form>
    </div>
  );
};

export default StudentSettingUpdate;