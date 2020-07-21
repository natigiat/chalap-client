import React, { useState, useEffect } from "react";
import axios from "axios";
import GoodWord from "./Components/GoodWord/GoodWord";
import Complain from "./Components/Complain/Complain";
import Vioelence from "./Components/Violence/Violence";
import Losts from "./Components/Losts/Losts";
import "./Screen5.css";

function Screen5() {
  const [StudentName, setStudentName] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/students/family/2"
      )
      .then(function (response) {
        console.log(response.data);
        setStudentName(response.data);
      });
  }, []);
  const onSubmit1 = (value) => {
    console.log(value);
    axios
      .post(
        "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/reports/",
        {
          id: 2,
          type: "lost",

          RouteId: 1,
          UserId: 1,
          StudentId: 1,
          message: "boaz",
          involvedStudents: "שמות המעורבים",
          anonymousMessage: true,

          address: "כתובת",
          image: "https://imageurl.com",
          subject: "ג",
          date: "2020-07-08 00:00:00",
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const names = ["Ayelet Ben Dahan", "Shimrit Levi", "Yuval Dayan"];

  return (
    <div className="form">
      <GoodWord
        children={[StudentName]}
        type="good_word"
        onSubmit={onSubmit1}
      />{" "}
      <br />
      <Complain children={[StudentName]} type="report" onSubmit={onSubmit1} />
      <br />
      <Vioelence
        children={[StudentName]}
        type="vioelence"
        onSubmit={onSubmit1}
      />
      <br />
      <Losts children={[StudentName]} type="lost" onSabmit={onSubmit1} />
    </div>
  );
}

export default Screen5;
