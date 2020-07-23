import React, { useState } from "react";

import { Row, Col, Avatar } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "./Children.css";

function Children(props) {
  return (
    <div className="children">
      <div onClick={props.catchChild}>
        <Row className="child" dir="rtl" align="middle" onClick={() => {}}>
          <Col flex="80px">
            <Avatar className="altImageAvatar">{props?.firstName[0]}</Avatar>
          </Col>
          <Col className="name">{props?.firstName}</Col>
          <Col className="arrow">
            <LeftOutlined />
          </Col>
        </Row>
        <Row className="line"></Row>
      </div>
    </div>
  );
}

export default Children;
