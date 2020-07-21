import React from "react";
import { Input } from "antd";
import "./ContactUs";

function Call() {
  const { TextArea } = Input;

  return (
    <div>
      <p>
        <a href="tel:+972536238371">
          {" "}
          <PhoneOutlined />{" "}
        </a>
        <div></div>
      </p>
      Click here
      <a href="https://api.whatsapp.com/send?phone=+972536238371">
        Send Message by watsApp
        <br />
      </a>
      <br /> <TextArea rows={4} />
      <br />
      <br />
    </div>
  );
}

export default Call;
