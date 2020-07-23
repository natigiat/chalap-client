import React, { useState, useEffect } from "react";
import SettingHours from "../Settinghours/Settinghours";
import { Tabs, Avatar } from "antd";
import Pdetails from "../Pdetails/Pdetails";
function Insidekids({ child }) {
  const [Days, setDays] = useState([
    {
      key: 1,
      day: "יום ראשון",
    },
    {
      key: 2,
      day: "יום שני",
    },
    {
      key: 3,
      day: "יום שלישי",
    },
    {
      key: 4,
      day: "יום רביעי",
    },
    {
      key: 5,
      day: "יום חמישי",
    },
    {
      key: 6,
      day: "יום שישי",
    },
  ]);

  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  console.log(child);
  return (
    <div>
      <div className="">
        <Avatar className="altImageAvatar">{child.firstName?.[0]}</Avatar>
        {child.firstName}

        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="פרטים אישיים" key="1">
            <Pdetails
              address={child.school?.station?.name}
              school={child.favoriteStation?.name}
              phone={child.favoriteStation?.id}
            />
          </TabPane>
          <TabPane tab="שעת סיום" key="2">
            {Days.map((days) => (
              <SettingHours key={days.key} day={days.day} />
            ))}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Insidekids;
