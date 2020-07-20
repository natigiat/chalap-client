import React, { useState, useEffect } from "react";
import Alerts from "../Alert/Alert";
import Children from "..//Children/Children";
import "./Parent.css";
function Parent() {
  const [Api, setapi] = useState([
    {
      name: "הילה",
      exit: "תחנת דלק מכמש",
      school: "בית ספר עפרה",
    },
    {
      name: "משה",
      exit: "עלי",
      school: "אולפנת צביה",
    },
    {
      name: "ישי",
      exit: "בית אל",
      school: "שער בנימין",
    },
    {
      name: "נעמה",
      exit: "שער בנימין",
      school: "כוכב השחר",
    },
  ]);

  const [alrt, setalert] = useState({
    message: null,
    description: null,
  });

  useEffect(() => alrttip("error"), []);
  const alrttip = () => {
    setalert({ message: "תקלה", description: "תקלה", icon: "", type: "" });
  };
  return (
    <div className="parent">
      <h2>בוקר טוב</h2>
      <div>
        <h6>אין עיכובים צפויים</h6>
        <Alerts message={alrt.message} description={alrt.description} />
      </div>
      <div>
        <h6>מידע נוסף</h6>

        {Api.map((child) => (
          <Children name={child.name} exit={child.exit} school={child.school} />
        ))}
      </div>
    </div>
  );
}

export default Parent;
