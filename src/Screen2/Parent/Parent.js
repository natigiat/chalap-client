import React, { useState, useEffect } from "react";
import Alerts from "../Alert/Alert";
import Children from "..//Children/Children";
import axios from "axios";
import Insidekids from "../insidkids/insidkids";
import Popup from "reactjs-popup";
import { Form, Input, Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import "./Parent.css";
import InputAddUser from "../InputAddUser/InputAddUser";

function Parent() {
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

  // const [alrt, setalert] = useState({
  //   message: null,
  //   description: null,
  //   icon: null,
  //   type: null,
  //   alrt: true,
  // });

  // useEffect(() => alrttip(), []);

  // const alrttip = () => {
  //   setalert({
  //     message: "תקלה",
  //     description: "תקלה",
  //     icon: "",
  //     type: "",
  //     alrt: true,
  //   });
  // };

  const [selectedchild, setSelected] = useState([]);

  return (
    <div dir="rtl">
      <div className="parentSc2" dir="rtl">
        <div className="childrenManagement">
          <h2 className="myChildren">הילדים שלי </h2>
        </div>
        {/* {alrt.alrt ? (
        <Alerts message={alrt.message} description={alrt.description} />
      ) : (
        <h6>אין עיכובים צפויים</h6>
      )}

      <div>
<<<<<<< HEAD
        <h6>מידע נוסף</h6>
        <Insidekids />
        {Api.map((child) => (
          <Children
            key={child.key}
            name={child.name}
            exit={child.exit}
            school={child.school}
            catchChild={() => {
              console.log(child.key);
            }}
          />
        ))}
      </div>
=======
        <h6>מידע נוסף</h6> */}

        {fakeArry.map((child) => (
          <Children
            key={child.id}
            firstName={child.firstName}
            favoriteStation={child.favoriteStation.name}
            school={child.school.station.name}
            catchChild={() => {
              setSelected(child);
            }}
          />
        ))}

        <Popup
          trigger={<button className="addChildButton">
              <UserAddOutlined className="addUserIcon"/>
              <span className="addChildPopup">להוספת ילד</span>
              </button>}
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
      <Insidekids child={selectedchild} />
    </div>
  );
}

export default Parent;
