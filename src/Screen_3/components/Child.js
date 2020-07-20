import React from "react";
import img1 from "./img/pensil (2).png";
import img2 from "./img/pensil.png";
import img3 from "./img/user (2).png";
import img4 from "./img/user.png";

import "./App.css";

function App() {
  let Name = "david";
  let Time = "13:45";
  function imageClick() {
    console.log("aaa");
  }
  return (
    <div className="Child">
      <span className="name">{Name}</span>
      <span className="time">{Time}</span>
      <div onClick={imageClick}>
        <img src={img1} className="img1"></img>
        <img className="img2" src={img2}></img>
      </div>
      <img className="img3" src={img3}></img>
      <img className="img4" src={img4}></img>
    </div>
  );
}
export default App;
