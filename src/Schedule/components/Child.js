import React from "react";
import img1 from "./img/pensil (2).png";
import img2 from "./img/pensil.png";
import img3 from "./img/user (2).png";
import img4 from "./img/user.png";
import "./Child.css";

function Child(props) {
  return (
    <div className={"child " + props.className}>
      <div className="text">
        <span className="name">{props.name}</span>
        <span className={"time " + props.className2}>{props.time}</span>
        <input className="input input2" type="time" />
        <button className="button button2">ok</button>
      </div>
      <div onClick={props.onClick}>
        <img src={img1} className="img1" alt=""></img>
        <img className="img2" src={img2} alt=""></img>
      </div>
      <img className="img3" src={img3} alt=""></img>
      <img className="img4" src={img4} alt=""></img>
    </div>
  );
}
export default Child;
