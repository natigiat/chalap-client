import React from "react";
import "antd/dist/antd.css";
import "./InputAddUser.css";
import { Form, Input, Button } from "antd";
// import newChildImage from '../../Screen2/images/newChildImage.png'


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const InputAddUser = (props) => {
  const onFinish = (values) => {
    props.onSubmitClick(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="popupInputAddUeser">

      <img src="/images/screen2_newChildImage.png" alt="" className="addUserImage" />
      <div>יש לי ילד נוסף</div>
      <div>שרוצה לנסוע אתכם</div >
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "נא להכניס שם",
            },
          ]}
        >
          <Input className="inputChildName" placeholder="שם התלמיד" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button className="buttonChildName" type="primary" htmlType="submit">
            חזרו אלי לנייד
            </Button>
        </Form.Item>
      </Form>
    </div >
  );
};

export default InputAddUser;
