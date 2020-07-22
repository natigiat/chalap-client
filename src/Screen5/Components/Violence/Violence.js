import "./Violence.css";
import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, DatePicker, Checkbox } from "antd";

function Violence(props) {
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

  const names = ["avi", "babi", "gagi"];

  function onChangeDate(date, dateString) {
    console.log(dateString);
  }

  console.log(props.type);
  const options = [
    { label: "הלוך", value: "הלוך " },
    { label: "חזור", value: "חזור" },
  ];

  const [choose, setChoose] = useState();

  const { TextArea } = Input;
  const { Option } = Select;

  const onChangeRide = (e) => {
    setChoose(e.target.value);
  };
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
      <h1 className="title">אלימות </h1>

      <Form.Item
        className="textarea1"
        name="messege"
        label=""
        rules={[{ required: true }]}
      >
        <TextArea rows={6} placeholder="תיאור המקרה ..." />
      </Form.Item>
      <Form.Item>
        <Select
          className="select"
          defaultValue="בחר ילד"
          style={{ width: 250 }}
          onChange={handleChange}
        >
          {names.map((value, index) => (
            <Option key={index}>{value}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="mans" label="" rules={[{ required: true }]}>
        <TextArea rows={4} placeholder="אנשים מעורבים" />
      </Form.Item>

      <div className="date">
        <Form.Item name="date" label="">
          <DatePicker onChange={onChangedate} /> :תאריך
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

export default Violence;
