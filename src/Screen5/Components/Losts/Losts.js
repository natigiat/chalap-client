import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  Checkbox,
} from "antd";

import "./Losts.css";

function Losts(props) {
  const names = ["avi", "babi", "gagi"];
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const { Option } = Select;
  const [choose, setChoose] = useState();

  console.log(props.type);

  function onChangeDate(date, dateString) {
    console.log(dateString);
  }

  const onFinish = (values) => {
    console.log("all the details:", values);
    console.log("lost details:", values["lost details"]);
    // console.log("loster name:", values["loster name: "][0]);
    console.log("date:", values["date"]);
    console.log("direction:", values["bus way"]);

    props.onSabmit(values);
  };

  // button chuse
  const options = [
    { label: "הלוך", value: "הלוך " },
    { label: "חזור", value: "חזור" },
  ];

  const onChangeRide = (e) => {
    setChoose(e.target.value);
  };
  console.log(choose);

  function handleChange(value, name) {
    console.log("hi", name.children);
  }
  function onChangebox(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Form className="body" name="control-hooks" onFinish={onFinish}>
      <h1 className="title">אבידות</h1>
      <div className="divstyle">
        פרטי האבידה
        <Form.Item name="lost details" label="">
          <TextArea rows={6} placeholder="מה אבד לך?" />
        </Form.Item>
      </div>
      <div className="divstyle1">
        למי אבד
        <Form.Item>
          <Select
            className="select"
            defaultValue="בחר ילד"
            style={{ width: 250 }}
            onChange={handleChange}
            placeholder="בחר ילד"
          >
            {names.map((value, index) => (
              <Option key={index}>{value}</Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <br />

      <div className="date">
        <Form.Item name="date" label="">
          <DatePicker onChangeDate={onChangeDate} /> :תאריך
        </Form.Item>

        <Form.Item name="bus" label="" className="btn">
          <Radio.Group
            options={options}
            onChangeRide={onChangeRide}
            optionType="button"
            buttonStyle="solid"
          />
          {":הסעה"}
        </Form.Item>
      </div>
      <Checkbox onChange={onChangebox}>הישאר אנונימי</Checkbox>
      <Form.Item>
        <Button className="button" type="primary" htmlType="submit">
          שליחה
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Losts;
