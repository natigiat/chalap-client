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

  //   function onChangeDate(date, dateString) {
  //     console.log(dateString);

  const [date, setDate] = useState();
  console.log(date);
  function onChangedate(date, dateString) {
    setDate(dateString);
    console.log(date);
  }

  const onFinish = (values) => {
    const dataReport = {
      type: props.type,
      Messege: values["messege"],
      StudentId: childname,
      Date: date,
      RouteId: choose,
      anunims: anunims,
    };
    console.log(dataReport);

    props.onSubmit(dataReport);
  };

  // button chuse
  const options = [
    { label: "הלוך", value: "הלוך " },
    { label: "חזור", value: "חזור" },
  ];

  function onChangeRide(e) {
    setChoose(e.target.value);
  }
  console.log(choose);

  const [childname, setChildname] = useState();
  function handleChange(value, name) {
    setChildname(name.children);
    console.log("hi", name.children);
  }
  const [anunims, setAnunims] = useState(false);
  function onChangebox(e) {
    setAnunims(e.target.checked);
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Form className="body" name="control-hooks" onFinish={onFinish}>
      <h1 className="title">אבידות</h1>

      <Form.Item
        name="messege"
        label="פרטי האבידה"
        rules={[{ required: true }]}
      >
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
        <Form.Item name="date" label="">
          <DatePicker onChangeDate={onChangedate} /> :תאריך
        </Form.Item>

        <Form.Item name="bus" label="" className="btn">
          <Radio.Group
            options={options}
            onChange={onChangeRide}
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
