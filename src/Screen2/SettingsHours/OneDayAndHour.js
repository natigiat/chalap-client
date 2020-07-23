import React, { useState } from "react";
import Popup from "reactjs-popup";
import Clock from "./images.png";
import "./OneDayAndHour.css";
import MyClock from "./react-timekeeper";
function OneDayAndHour(props) {
  const [Hour, setHour] = useState(props.Hour);
  return (
    <div className="OneDayAndHour">
      <span className="Day">{props.Day}</span>
      <Popup
        modal
        trigger={<span className="Hour">{Hour}</span>}
        position="center center"
        contentStyle={{
          margin: "auto",
          padding: "auto",
          width: 260,
          height: 428,
        }}
      >
        {(close) => (
          <div className="MyClock">
            <MyClock
              onDoneClick={(value) => {
                setHour(value.formatted24);
                close();
                props.func(props.index, value.formatted24);
              }}
            />
          </div>
        )}
      </Popup>

      <img className="Clock" src={Clock} alt="" />
    </div>
  );
}

export default OneDayAndHour;
