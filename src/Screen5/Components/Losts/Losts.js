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
import "./Losts.css";
import { OmitProps } from "antd/lib/transfer/ListBody";

function Losts() {
  const onFinish = (values) => {
    console.log(values);
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
      <Form.Item name="שלום" label="פרטי האבידה" rules={[{ required: true }]}>
        <TextArea rows={10} />
      </Form.Item>

      <Form.Item label="למי אבד">
        <Cascader
          options={[
            {
              value: "zhejiang",
              label: "Zhejiang",
            },
          ]}
        />
      </Form.Item>

      <Form.Item label="מתי אבד">
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

export default Losts;
