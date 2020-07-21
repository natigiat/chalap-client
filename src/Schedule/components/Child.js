import React from "react";
import img1 from "./img/pensil (2).png";
import img2 from "./img/pensil.png";
import img3 from "./img/user (2).png";
import img4 from "./img/user.png";
import "./Child.css";


function Child(props) {
 
  function imageClick() {
    console.log("aaa");
  }
  return(
    <div className="Child">
      <span className="name">{props.name}</span>
      <span className="time">{props.time}</span>
      <div onClick={imageClick}>
        <img src={img1} className="img1" alt=""></img>
        <img className="img2" src={img2} alt=""></img>
      </div>
      <img className="img3" src={img3} alt=""></img>
      <img className="img4" src={img4} alt=""></img>
    </div>
  );
}
export default Child;
