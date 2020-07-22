import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker, Row, Col } from "antd";
import { TimePicker } from "antd";
import moment from "moment";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./GoodWord.css";

function GoodWord(props) {
  const typeRequest = [
    { name: "אבידות", type: "lost" },
    { name: "מילה טובה", type: "good_word" },
    { name: "אלימות", type: "violence" },
    { name: "תלונה", type: "report" },
  ];
  console.log(typeRequest);

  const { TextArea } = Input;
  const { Option } = Select;
  const format = "HH:mm";

  const [date, setDate] = useState();

  function onChangedate(date, dateString) {
    setDate(dateString);
    console.log(date);
  }
  const [time, setTime] = useState();
  function onTimeChange(time, timestring) {
    setTime(timestring);
    console.log("ירושלים של זהב");
  }

  const [type, setType] = useState();

  function handleChange(value) {
    console.log("hi", value);
    setType(value);
  }

  const onFinish = (values) => {
    const dataReport = {
      type: type,
      Messege: values["messege"],
      Date: date,
      origin: values["Origin"],
      destination: values["Destination"],
      time: time,
    };
    console.log("DATAREPORT", dataReport);
    props.onSubmit(dataReport);
  };
  const files = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
  };

  return (
    <Form className="report" name="control-hooks" onFinish={onFinish}>
      <div className="title">טופס פניה</div>
      <Row className="row">
        <Col className="col">
          <Form.Item>
            <DatePicker
              className="date"
              onChange={onChangedate}
              rules={[{ require: true }]}
            />
          </Form.Item>
          <Form.Item
            className="textarea1"
            name="Origin"
            label=""
            rules={[{ required: true }]}
          >
            <TextArea rows={2} placeholder="מוצא" />
          </Form.Item>
        </Col>
        <Col className="col">
          <Form.Item>
            <TimePicker
              className="hour"
              defaultValue={moment("12:08", format)}
              format={format}
              onChange={onTimeChange}
              rules={[{ require: true }]}
            />
          </Form.Item>
          <Form.Item
            className="textarea1"
            name="Destination"
            label=""
            rules={[{ required: true }]}
          >
            <TextArea rows={2} placeholder="יעד" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Select
          className="select"
          defaultValue="בחר נושא פניה"
          // style={{ width: 250 }}
          onChange={handleChange}
          placeholder="בחר נושא פניה"
          rules={[{ required: true }]}
        >
          {typeRequest.map((value, index) => (
            <Option key={index} value={value.type}>
              {value.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        className="textarea2"
        name="messege"
        label=""
        rules={[{ required: true }]}
      >
        <TextArea rows={8} placeholder="תוכן הפניה" />
      </Form.Item>
      <Upload {...files}>
        <Button>
          <UploadOutlined /> צרף קובץ
        </Button>
      </Upload>
      ,
      <Form.Item>
        <Button className="button" type="primary" htmlType="submit">
          שלח
        </Button>
      </Form.Item>
    </Form>
  );
}

export default GoodWord;
