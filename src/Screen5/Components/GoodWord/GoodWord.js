import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker, Radio } from "antd";
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
  function handleChange(value) {
    console.log(value);
  }

  const [choose, setChoose] = useState();
  const onChange4 = (e) => {
    setChoose(e.target.value);
  };

  return (
    <Form name="control-hooks" onFinish={onFinish}>
      <h1>מילה טובה</h1>
      <Form.Item
        name="note"
        label="תודה על מילה טובה"
        rules={[{ required: true }]}
      >
        <TextArea rows={10} />
      </Form.Item>

      <Form.Item>
        <Select
          defaultValue="בחר ילד"
          style={{ width: 120 }}
          onChange={handleChange}
          placeholder="בחר ילד"
        >
          {names.map((value) => (
            <Option>{value}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <DatePicker />
      </Form.Item>
      <Form.Item label="באיזה הסעה">
        <br />
        <Radio.Group
          options={options}
          onChange={onChange4}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default GoodWord;
