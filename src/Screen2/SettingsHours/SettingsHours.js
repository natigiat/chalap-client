import React from "react";
import OneDayAndHour from "./OneDayAndHour";
import "./SettingsHours.css";

function SettingsHours() {
  const DaysAndHours = [
    { Day: "יום ראשון", Hour: "13:45" },
    { Day: "יום שני", Hour: "13:00" },
    { Day: "יום שלישי", Hour: "13:10" },
    { Day: "יום רביעי", Hour: "13:15" },
    { Day: "יום חמישי", Hour: "13:20" },
    { Day: "יום שישי", Hour: "12:00" },
  ];
  const func = (indexNewTime, newTime) => {
    DaysAndHours[indexNewTime].Hour = newTime;
    console.log(DaysAndHours);
  };
  return (
    <div>
      {DaysAndHours.map((OneObject, index) => (
        <OneDayAndHour
          key={index}
          index={index}
          Day={OneObject.Day}
          Hour={OneObject.Hour}
          func={func}
        />
      ))}
    </div>
  );
}

export default SettingsHours;
