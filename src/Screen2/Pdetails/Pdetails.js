import React, { useState } from "react";

import "./Pdetails.css";
import { Radio } from "antd";
import {
  EnvironmentOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

function Pdetails(props) {
  return (
    <div className="kidsdetails9">
      <div className="kid9">
        <HomeOutlined /> {props.address}
      </div>
      <div className="kid9">
        <EnvironmentOutlined /> {props.school}
      </div>
      <div className="permissionRow9">
        <div className="kid11">
          <PhoneOutlined /> {props.phone}
        </div>
        <div className="givePermission9">
          <Radio.Button onClick={console.log("callmy")}>תן הרשאה</Radio.Button>
        </div>
      </div>
    </div>
  );
}

export default Pdetails;
