import React, { useState, useEffect } from "react";
import OneDayAndHour from "../SettingsHours/OneDayAndHour";
import { Tabs, Avatar } from "antd";
import Pdetails from "../Pdetails/Pdetails";
import "./insidekids.css";

function Insidekids({ child }) {
  const DaysAndHours = [
    { Day: "ראשון", Hour: "13:45" },
    { Day: "שני", Hour: "13:00" },
    { Day: "שלישי", Hour: "13:10" },
    { Day: "רביעי", Hour: "13:15" },
    { Day: "חמישי", Hour: "13:20" },
    { Day: "שישי", Hour: "12:00" },
  ];
  const func = (indexNewTime, newTime) => {
    DaysAndHours[indexNewTime].Hour = newTime;
    console.log(DaysAndHours);
  };

  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  console.log(child);
  return (
    <div className="insidekids">
      <div className="nameimg">
        <Avatar className="altImageAvatar">{child.firstName?.[0]}</Avatar>
        <br />
        <br />
        <div className="name">{child.firstName}</div>
      </div>
      <br />
      <br />
      <div>
        <Tabs className="tab" defaultActiveKey="1" onChange={callback}>
          <TabPane tab="פרטים אישיים" key="1">
            <Pdetails
              address={child.school?.station?.name}
              school={child.favoriteStation?.name}
              phone={child.favoriteStation?.id}
            />
          </TabPane>
          <TabPane tab="שעת סיום" key="2">
            {DaysAndHours.map((OneObject, index) => (
              <OneDayAndHour
                key={index}
                index={index}
                Day={OneObject.Day}
                Hour={OneObject.Hour}
                func={func}
              />
            ))}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Insidekids;
