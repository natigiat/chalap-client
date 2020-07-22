import React, { useState } from "react";
import img1 from "./img/pensil (2).png";
import img2 from "./img/pensil.png";
import img3 from "./img/user (2).png";
import img4 from "./img/user.png";
import "./Child.css";

function Child(props) {
  const [displayNone, setDisplayNone] = useState(["none"]);

  const [displayBlock, setDisplayBlock] = useState([]);

  const EditEndTime = () => {
    setDisplayBlock(["none"]);
    setDisplayNone([""]);
  };

  let newTime = null;

  const onChangeNewTime = (e) => {
    newTime = e.target.value;
  };

  const onClickNewTime = () => {
    setDisplayBlock([""]);
    setDisplayNone(["none"]);
  };

  return (
    <div className="oneChild">
      <div className="oneChild2">
        <img className="img3" src={img3} alt=""></img>
        <img className="img4" src={img4} alt=""></img>
        <div className="text">
          <span className={"time " + displayBlock}>{props.time}</span>
          <span className={"name "}>{props.name}</span>
          <input
            type="time"
            className={"input " + displayNone[0]}
            onChange={onChangeNewTime}
          />
          <button
            onClick={() => {
              props.onClickNewTime(newTime, props.index);
              onClickNewTime();
            }}
            className={"button " + displayNone[0]}
          >
            ok
          </button>
        </div>
        <div className="divImgPen" onClick={EditEndTime}>
          <img src={img1} className="img1" alt=""></img>
          <img className="img2" src={img2} alt=""></img>
        </div>
      </div>
    </div>
  );
}
export default Child;
