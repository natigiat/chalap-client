import React, { useState } from "react";
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
      school: "ישיבת מעלות",
    },
  ]);

  return (
    <div className="parent">
      <h2>בוקר טוב</h2>
      <h6>אין עיכובים צפויים</h6>
      <div>
        {/* <Alerts /> */}
        <h6>מידע נוסף</h6>

        {Api.map((child) => (
          <Children name={child.name} exit={child.exit} school={child.school} />
        ))}
      </div>
    </div>
  );
}

export default Parent;
