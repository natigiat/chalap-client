import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker, Radio, Checkbox } from "antd";
import { TimePicker } from "antd";
import moment from "moment";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./GoodWord";

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
    defaultFileList: [
      {
        uid: "1",
        name: "xxx.png",
        status: "done",
        response: "Server Error 500", // custom error message to show
        url: "http://www.baidu.com/xxx.png",
      },
      {
        uid: "2",
        name: "yyy.png",
        status: "done",
        url: "http://www.baidu.com/yyy.png",
      },
      {
        uid: "3",
        name: "zzz.png",
        status: "error",
        response: "Server Error 500", // custom error message to show
        url: "http://www.baidu.com/zzz.png",
      },
    ],
  };

  return (
    <Form className="body" name="control-hooks" onFinish={onFinish}>
      <h1 className="title">טופס פניה</h1>
      <div className="date">
        <Form.Item>
          <DatePicker onChange={onChangedate} rules={[{ require: true }]} />
        </Form.Item>
      </div>
      <div className="hourS5">
        <TimePicker
          defaultValue={moment("12:08", format)}
          format={format}
          onChange={onTimeChange}
          rules={[{ require: true }]}
        />
      </div>
      <Form.Item name="Origin" label="" rules={[{ required: true }]}>
        <TextArea rows={1} placeholder="מוצא" />
      </Form.Item>
      <Form.Item name="Destination" label="" rules={[{ required: true }]}>
        <TextArea rows={1} placeholder="יעד" />
      </Form.Item>
      <Form.Item>
        <Select
          className="select"
          defaultValue="בחר נושא פניה"
          style={{ width: 250 }}
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
      <Form.Item name="messege" label="" rules={[{ required: true }]}>
        <TextArea rows={6} placeholder="תוכן הפניה" />
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
