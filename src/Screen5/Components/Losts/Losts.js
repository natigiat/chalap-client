import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
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

  return (
    <Form className="body" name="control-hooks" onFinish={onFinish}>
      <h1 className="title">אבידות</h1>
      <Form.Item name="lost details" label="פרטי האבידה">
        <TextArea rows={6} />
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
        <Form.Item name="date as" label="מתי אבד">
          <DatePicker onChangeDate={onChangeDate} />
        </Form.Item>

        <Form.Item label="באיזה הסעה" name="bus way: ">
          <br />
          <Radio.Group
            options={options}
            onChangeRide={onChangeRide}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>
      </div>

      <Form.Item>
        <Button className="button" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Losts;
