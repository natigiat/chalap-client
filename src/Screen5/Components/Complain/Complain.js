import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, DatePicker, Checkbox } from "antd";
import "./Complain";

function Complain(props) {
  const names = ["avi", "ruhama", "ttt"];
  const { TextArea } = Input;
  const { Option } = Select;

  const [date, setDate] = useState();

  function onChangeDate(date, dateString) {
    console.log(dateString);
    setDate(dateString);
  }

  const onFinish = (values) => {
    const dataReport = {
      type: props.type,
      Messege: values["messege"],
      StudentId: name,
      Date: date,
      RouteId: choose,
      anunims: anunims,
    };
    props.onSubmit(dataReport);
    console.log(dataReport);
  };

  const [name, setname] = useState();
  function handleChange(value, name) {
    setname(name.children);
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

  const [anunims, setAnunims] = useState(false);
  function onChangebox(e) {
    setAnunims(e.target.checked);
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Form className="body" name="control-hooks" onFinish={onFinish}>
      <h1 className="title"> תלונה</h1>
      <div className="divstyle">
        <Form.Item
          name="messege"
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
      </div>
      <br />

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

export default Complain;
