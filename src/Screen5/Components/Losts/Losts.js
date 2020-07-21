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
      Messege: values["messege"],
      StudentId: "",
      Date: date,
      RouteId: choose,
    };
    console.log(dataReport);

    //props.onSubmit(dataReport);
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
          <DatePicker onChange={onChangedate} />
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
      <Checkbox onChange={onChangebox}>הישאר אנונימי</Checkbox>
      <Form.Item>
        <Button className="button" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Losts;
