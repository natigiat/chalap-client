import React, { useState, useEffect } from "react";
import Alerts from "../Alert/Alert";
import Children from "..//Children/Children";

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

  const [alrt, setalert] = useState({
    message: null,
    description: null,
  });

  useEffect(() => alrttip("error"), []);
  const alrttip = () => {
    setalert({ message: x, description: "תקלה", icon: "", type: "" });
  };

  return (
    <div>
      <div>
        <Alerts message={alrt.message} description={alrt.description} />

        {Api.map((child) => (
          <Children
            name={child.name}
            phone={child.phone}
            school={child.school}
          />
        ))}
      </div>
    </div>
  );
}

export default Parent;
