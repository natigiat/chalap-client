import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, DatePicker } from "antd";
import "./Complain";

function Complain(props) {
  const onFinish = (values) => {
    console.log(values);
  };
  const names = ["avi", "ruhama", "ttt"];
  const { TextArea } = Input;
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  // button chuse
  const options = [
    { label: "הלוך", value: "הלוך " },
    { label: "חזור", value: "חזור" },
  ];

  const [choose, setChoose] = useState();
  const onChange4 = (e) => {
    setChoose(e.target.value);
  };
  console.log(choose);
  return (
    <Form name="control-hooks" onFinish={onFinish}>
      <h1> תלונה</h1>

      <Form.Item
        name="complaint details"
        label="פרטי המקרה"
        plceholder="מה קרה"
        // rules={[{ required: true }]}
      >
        <TextArea rows={10} />
      </Form.Item>

      <Form.Item
        name="who"
        label="מי נכח"
        // rules={[{ required: true }]}
      >
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

      <Form.Item name="date" label="מתי ">
        <DatePicker />
      </Form.Item>

      <Form.Item label="באיזה הסעה" name="bus way: ">
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

export default Complain;
