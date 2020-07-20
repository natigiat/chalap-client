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
  const alrttip = (alrttip1) => {
    switch (alrttip1) {
      case "error":
        setalert({ message: "תקלה", description: "תקלה" });
        break;
      case "success":
        setalert({ message: "הצלחה", description: "הצלחה" });
        break;
      case "info":
        setalert({ message: "עדכון", description: "עדכון" });
        break;
      case "warning":
        setalert({ message: "אזהרה ", description: "אזהרה" });
        break;
      default:
        setalert({ message: null, description: null });
    }
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
