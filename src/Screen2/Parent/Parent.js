import React, { useState } from "react";
import Alerts from "../Alert/Alert";
import Children from "..//Children/Children";
import "./Parent.css";
function Parent() {
  const [Api, setapi] = useState([
    {
      name: "boaz",
      phone: 52374245,
      school: "moria",
    },
    {
      name: "elior",
      phone: 523,
      school: "horev",
    },
    {
      name: "yosef",
      phone: 52375,
      school: "moria",
    },
    {
      name: "shadmit",
      phone: 54245,
      school: "shilo",
    },
  ]);

  return (
    <div className="parent">
      היי משה כהן{" "}
      <div>
        <Alerts />

        {Api.map((child) => (
          <Children
            name={child.name}
            phone={child.phone}
            school={child.school}
          />
        ))}
      </div>
      <button>aaaaa</button>
      <button>bbbbb</button>
      <button>ccccc</button>
    </div>
  );
}

export default Parent;
