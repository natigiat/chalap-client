import React from "react";
import OneDayAndHour from "./OneDayAndHour";
import "./SettingsHours.css";

function SettingsHours() {
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
