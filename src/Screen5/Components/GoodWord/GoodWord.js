import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker, Radio, Checkbox } from "antd";
import "./GoodWord";

function GoodWord(props) {
  const names = ["avi", "babi", "gagi"];
  const { TextArea } = Input;
  const { Option } = Select;

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

  const options = [
    { label: "הלוך", value: "הלוך " },
    { label: "חזור", value: "חזור" },
  ];

  const [choose, setChoose] = useState();
  const onChangeRide = (e) => {
    setChoose(e.target.value);
    console.log(e.target.value);
  };

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
        <Form.Item>
          <DatePicker onChange={onChangedate} />
        </Form.Item>

        <Form.Item>
          <DatePicker />
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

export default GoodWord;
