import React, { useState } from "react";
import img1 from "./img/pensil (2).png";
import img2 from "./img/pensil.png";
import img3 from "./img/user (2).png";
import img4 from "./img/user.png";
import "./Child.css";

function Child(props) {
  const [none, setNone] = useState(["none"]);
  const [className, setClassName] = useState([]);

  let newTime = null;
  const onChangeNewTime = (e) => {
    newTime = e.target.value;
  };

  const EditEndTime = () => {
    setClassName(["none"]);
    setNone([""]);
  };
  const onClickNewTime = () => {
    setClassName([""]);
    setNone(["none"]);
  };
  return (
    <div className="child">
      <div className="text">
        <span className={"name "}>{props.name}</span>
        <span className={"time " + className}>{props.time}</span>
        <input
          type="time"
          className={"input2 " + none[0]}
          onChange={onChangeNewTime}
        />
        <button
          onClick={() => {
            props.onClickNewTime(newTime, props.index);
            onClickNewTime();
          }}
          className={"button2 " + none[0]}
        >
          ok
        </button>
      </div>
      <div onClick={EditEndTime}>
        <img src={img1} className="img1" alt=""></img>
        <img className="img2" src={img2} alt=""></img>
      </div>
      <img className="img3" src={img3} alt=""></img>
      <img className="img4" src={img4} alt=""></img>
    </div>
  );
}
export default Child;
