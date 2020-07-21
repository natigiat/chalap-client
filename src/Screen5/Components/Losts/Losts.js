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
import moment from "moment";

import "./Losts.css";
const { RangePicker } = DatePicker;

function Losts(props) {
  function onChange(date, dateString) {
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

  const { TextArea } = Input;

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
      <h1>אבידות</h1>
      <Form.Item
        name="lost details"
        label="פרטי האבידה"
        // rules={[{ required: true }]}
      >
        <TextArea rows={10} />
      </Form.Item>

      <Form.Item
        name="loster name: "
        label="למי אבד"
        // rules={[{ required: true }]}
      >
        <Cascader
          options={[
            {
              value: "zhejiang",
              label: "Zhejiang",
            },
          ]}
        />
      </Form.Item>

      <Form.Item name="date as" label="מתי אבד">
        <DatePicker onChange={onChange} />
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

export default Losts;
