import React, { useState, useEffect } from "react";

import Children from "..//Children/Children";
import axios from "axios";
import Insidekids from "../insidkids/insidkids";
import Popup from "reactjs-popup";
import { Form, Input, Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import "./Parent.css";
import InputAddUser from "../InputAddUser/InputAddUser";

function Parent(props) {
  const [selectedchild, setSelected] = useState();

  return (
    <div dir="rtl">
      <div className="parentSc2" dir="rtl">
        <div className="childrenManagement">
          <h2 className="myChildren">הילדים שלי </h2>
        </div>

        {props.fakeArry.map((child) => (
          <Children
            key={child.id}
            firstName={child.firstName}
            favoriteStation={child.favoriteStation.name}
            school={child.school.station.name}
            catchChild={() => {
              //setSelected(child);
              props.selectedChild(child);
            }}
          />
        ))}
        <Popup
          trigger={
            <button className="addChildButton">
              <UserAddOutlined className="addUserIcon" />
              <span className="addChildPopup">להוספת ילד</span>
            </button>
          }
          modal
        >
          {(close) => (
            <div className="modal">
              <div className="content">
                <InputAddUser
                  onSubmitClick={(value) => {
                    console.log(value);
                  }}
                />
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

export default Parent;
