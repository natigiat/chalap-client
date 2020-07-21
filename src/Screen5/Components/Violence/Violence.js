import React from "react";
import { Form, Input, Button, Select } from "antd";

function Violence() {
  const onFinish = (values) => {
    console.log(values);
  };

  const { TextArea } = Input;

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
    </Form>
  );
}

export default Violence;
