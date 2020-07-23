import React from "react";
import "./react-timekeeper.css";
import TimeKeeper from "react-timekeeper";

function MyClock(props) {
  let newTime = null;
  return (
    <TimeKeeper
      hour24Mode
      forceCoarseMinutes
      coarseMinutes={5}
      onChange={(NewTime) => {
        newTime = NewTime;
      }}
      doneButton={() => {
        return (
          <div
            className="divInTimeKeeper"
            onClick={() => {
              props.onDoneClick(newTime);
            }}
          >
            בוצע
          </div>
        );
      }}
    />
  );
}

export default MyClock;
