import React, { useState } from "react";
import Alert from "../Alert/Alert";
import Children from "..//Children/Children";

function Parent() {
  const [Api, setapi] = useState([
    {
      name: boaz,
      phone: 052374245,
      school: moria,
    },
    {
      name: elior,
      phone: 0523,
      school: horev,
    },
    {
      name: yosef,
      phone: 052375,
      school: moria,
    },
    {
      name: shadmit,
      phone: 054245,
      school: shilo,
    },
  ]);

  return (
    <div>
      <div>
        <Alert />

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
