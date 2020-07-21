import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, DatePicker, Checkbox } from "antd";
import "./Complain";

function Complain(props) {
  const onFinish = (values) => {
    console.log(values);
  };

  const names = ["avi", "ruhama", "ttt"];
  const { TextArea } = Input;
  const { Option } = Select;

  function handleChange(value, name) {
    console.log("hi", name.children);
  }
  // button chuse
  const options = [
    { label: "הלוך", value: "הלוך " },
    { label: "חזור", value: "חזור" },
  ];

  const [choose, setChoose] = useState();
  const onChangeRide = (e) => {
    setChoose(e.target.value);
  };

  console.log(choose);

  function onChangebox(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Form className="body" name="control-hooks" onFinish={onFinish}>
      <h1 className="title"> תלונה</h1>

      <Form.Item
        name="complaint details"
        label="פרטי המקרה"
        plceholder="מה קרה"
        // rules={[{ required: true }]}
      >
        <TextArea rows={6} />
      </Form.Item>

      <Form.Item
        name="who"
        label="מי נכח"
        // rules={[{ required: true }]}
      >
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
        <Form.Item name="date" label="מתי ">
          <DatePicker />
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

      <Form.Item label="באיזה הסעה" name="bus way: ">
        <br />
        <Radio.Group
          options={options}
          onChangeRide={onChangeRide}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>

      <Checkbox onChange={onChangebox}>הישאר אנונימי</Checkbox>

      <Form.Item>
        <Button className="button" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Complain;
