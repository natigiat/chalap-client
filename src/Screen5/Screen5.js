import React, { useState, useEffect } from "react";
import axios from "axios";
import GoodWord from "./Components/GoodWord/GoodWord";
import Complain from "./Components/Complain/Complain";
import Vioelence from "./Components/Violence/Violence";
import Losts from "./Components/Losts/Losts";
import "./Screen5.css";

function Screen5() {
  const [StudentName, setStudentName] = useState([]);
  const [thisURL, setthisURL] = useState(
    "https://ant.design/components/good_word"
  );
  useEffect(() => {
    axios
      .get(
        "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/students/family/2"
      )
      .then(function (response) {
        setStudentName(response.data);
        // setthisURL(window.location.href);
      });
  }, []);
  //"thisType" הקוד לוקח את החלק האחרון של הכתובת ומכניס למשתנה
  let parts = thisURL.split("/");
  // let thisType = "vioelence";
  let thisType = parts[parts.length - 1];

  const [messege, setMessege] = useState();
  const [date, setDate] = useState();
  const [type, setType] = useState();
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [time, setTime] = useState();

  const onSubmit = (value) => {
    posttoserver(value);
  };

  useEffect(() => {}, [messege]);

  const posttoserver = ({ message, type, origin, destination, date, time }) => {
    axios
      .post(
        "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/reports/",
        {
          message,
          type,
          address: `${origin} ${"->"} ${destination}`,
          date: `${date} ${time}`,
        }
      )
      .then((res) => {
        console.log("POST DATA", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form">
      <GoodWord children={[StudentName]} type="good_word" onSubmit={onSubmit} />
    </div>
  );
}

export default Screen5;
