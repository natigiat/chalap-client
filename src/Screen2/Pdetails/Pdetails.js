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
    <div className="kidsdetails">
      <div className="kid">
        <HomeOutlined /> {props.address}
      </div>
      <div className="kid">
        {" "}
        <EnvironmentOutlined /> {props.school}
      </div>
      <div className="permissionRow">
        <div className="kid1">
          <PhoneOutlined /> {props.phone}
        </div>
        <div className="givePermission">
          <Radio.Button onClick={console.log("callmy")}>תן הרשאה</Radio.Button>
        </div>
      </div>
    </div>
  );
}

export default Pdetails;
