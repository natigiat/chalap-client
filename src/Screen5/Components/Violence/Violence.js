import "./Violence.css";
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

function Violence(props) {
  const onFinish = (values) => {
    console.log(values);
  };
  const names = ["avi", "babi", "gagi"];

  console.log(props.type);
  const options = [
    { label: "הלוך", value: "הלוך " },
    { label: "חזור", value: "חזור" },
  ];

  const [choose, setChoose] = useState();

  const { TextArea } = Input;
  const { Option } = Select;

  const onChange4 = (e) => {
    setChoose(e.target.value);
  };
  console.log(choose);

  // function handleChange(value) {
  //   console.log(`selected ${value}`);
  // }

  return (
    <Form className="body" name="control-hooks" onFinish={onFinish}>
      <h1 className="title">אלימות </h1>

      <Form.Item
        className="textarea1"
        name="note"
        label=""
        rules={[{ required: true }]}
      >
        <TextArea rows={6} placeholder="תיאור המקרה ..." />
      </Form.Item>
      <Form.Item>
        <Select
          className="select"
          defaultValue="lucy"
          style={{ width: 250 }}
          // onChange={onChange}
        >
          {names.map((value) => (
            <Option>{value}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="mans" label="" rules={[{ required: true }]}>
        <TextArea rows={4} placeholder="אנשים מעורבים" />
      </Form.Item>

      <div className="date">
        <Form.Item name="date" label="">
          <DatePicker
          // onChange={handleChange}
          />{" "}
          :תאריך
        </Form.Item>

        <Form.Item name="bus" label="" className="btn">
          <Radio.Group
            options={options}
            onChange={onChange4}
            optionType="button"
            buttonStyle="solid"
          />
          {":הסעה"}
        </Form.Item>
      </div>
      <Form.Item>
        <Button
          className="button"
          rules={[{ required: true }]}
          type="primary"
          htmlType="submit"
        >
          שליחה
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Violence;
