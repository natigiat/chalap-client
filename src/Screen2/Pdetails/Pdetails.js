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
      <div>
        <div className="kid">
          <PhoneOutlined /> {props.phone}{" "}
        </div>{" "}
        <div>
          <Radio.Button className="kid4" onClick={console.log("callmy")}>
            תן הרשאה
          </Radio.Button>
        </div>
      </div>
    </div>
  );
}

export default Pdetails;
