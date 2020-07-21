import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker, Radio, Checkbox } from "antd";
import "./GoodWord";

function GoodWord(props) {
  const onFinish = (values) => {
    console.log(values);
    props.onsubmit(values);
  };

  const names = ["avi", "babi", "gagi"];

  const { TextArea } = Input;
  const { Option } = Select;
  const options = [
    { label: "הלוך", value: "הלוך " },
    { label: "חזור", value: "חזור" },
  ];

  function onChangeDate(date, dateString) {
    console.log(dateString);
  }

  function handleChange(value, name) {
    console.log("hi", name.children);
  }

  const [choose, setChoose] = useState();
  const onChangeRide = (e) => {
    setChoose(e.target.value);
  };
  function onChangebox(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Form className="body" name="control-hooks" onFinish={onFinish}>
      <h1 className="title">מילה טובה</h1>

      <Form.Item name="note" label="" rules={[{ required: true }]}>
        <TextArea rows={6} placeholder="תודה על מילה טובה" />
      </Form.Item>

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

export default GoodWord;
