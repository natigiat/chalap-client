import React, { useState, useEffect } from "react";

import Children from "..//Children/Children";
import axios from "axios";
import Insidekids from "../insidkids/insidkids";
import Parent from "../Parent/Parent";
import Popup from "reactjs-popup";
import { Form, Input, Button } from "antd";
import { ArrowRightOutlined, UserAddOutlined } from "@ant-design/icons";
// import "./Parent.css";
import InputAddUser from "../InputAddUser/InputAddUser";

function Screen2() {
  const [children, setChildren] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/student/family/{id}"
      )
      .then(function (response) {
        console.log(response.data);
        setChildren(response.data);
      });
  });

  const fakeArry = [
    {
      id: 1,
      firstName: "עברי",
      favoriteStation: {
        id: 1,
        name: "בני אדם",
      },
      school: {
        StationId: null,
        station: { id: 2, name: "מכמש" },
      },
    },
    {
      id: 2,
      firstName: "משה",
      favoriteStation: {
        id: 2,
        name: "בית עידית",
      },
      school: {
        StationId: null,
        station: { id: 2, name: "רימונים" },
      },
    },
    {
      id: 3,
      firstName: "אמונה",
      favoriteStation: {
        id: 3,
        name: "סניף",
      },
      school: {
        StationId: null,
        station: { id: 3, name: "מגרון" },
      },
    },
  ];
  const [selectedchild, setSelectedChild] = useState();

  const setSelectedChildFromParent = (child) => {
    setSelectedChild(child);
  };

  console.log("selectedchild=", selectedchild);

  return (
    <div dir="rtl">
      <div>
        <Parent
          fakeArry={fakeArry}
          selectedChild={setSelectedChildFromParent}
        />
      </div>
      <div>
        <Insidekids selectedChild={selectedchild} />
      </div>
    </div>
  );
}

export default Screen2;
