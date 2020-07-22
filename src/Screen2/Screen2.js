import React, { useState, useEffect } from "react";
import Alerts from "./Alert/Alert";
import Children from "./Children/Children";
import axios from "axios";
import "./Screen2.css";

function Parent() {
  const [children, setChildren] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/student/family/{id}"
      )
      .then(function (response) {
        console.log(response.data);
        setChildren(response.data);
      });
  });

  const fakeArry = [
    {
      id: 2,
      firstName: "עברי",
      favoriteStation: {
        id: 1,
        name: "בני אדם",
      },
      school: {
        StationId: null,
        station: null,
      },
    },
    {
      id: 3,
      firstName: "אורה",
      favoriteStation: {
        id: 1,
        name: "בני אדם",
      },
      school: {
        StationId: 1,
        station: 1,
      },
    },
    {
      id: 4,
      firstName: "גבריאל",
      favoriteStation: {
        id: 1,
        name: "בני אדם",
      },
      school: {
        StationId: null,
        station: null,
      },
    },
    {
      id: 6,
      firstName: "משה",
      favoriteStation: {
        id: 1,
        name: "בני אדם",
      },
      school: {
        StationId: null,
        station: null,
      },
    },
  ];

  const [alrt, setalert] = useState({
    message: null,
    description: null,
    icon: null,
    type: null,
    alrt: true,
  });

  useEffect(() => alrttip(), []);

  const alrttip = () => {
    setalert({
      message: "תקלה",
      description: "תקלה",
      icon: "",
      type: "",
      alrt: true,
    });
  };
  return (
    <div className="parent">
      <h2>בוקר טוב</h2>
      {alrt.alrt ? (
        <Alerts message={alrt.message} description={alrt.description} />
      ) : (
        <h6>אין עיכובים צפויים</h6>
      )}

      <div>
        <h6>מידע נוסף</h6>

        {fakeArry.map((child) => (
          <Children
            key={child.id}
            firstName={child.firstName}
            favoriteStation={child.favoriteStation.name}
            school={child.school.station}
          />
        ))}
      </div>
    </div>
  );
}

export default Parent;
