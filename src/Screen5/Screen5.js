import React, { useState, useEffect } from "react";
import axios from "axios";
import GoodWord from "./Components/GoodWord/GoodWord";
import Complain from "./Components/Complain/Complain";
import Vioelence from "./Components/Violence/Violence";
import Losts from "./Components/Losts/Losts";
import "./Screen5.css";

function Screen5() {
  console.log("hi boaz");
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
  const [Messege, setMessege] = useState();
  const [StudentId, setStudentId] = useState();
  const [Dateofcase, setDate] = useState();
  const [RouteId, setRouteId] = useState();
  const [anunims, setanunims] = useState();

  const onSubmit1 = (value) => {
    console.log(value.type);
    setMessege(String(value.Messege));
    setStudentId(value.StudentId);
    setDate(String("2020-07-08 00:00:00"));
    setRouteId(String(value.RouteId));
    setanunims(value.anunims);
  };
  console.log(Dateofcase);
  console.log(StudentId);
  console.log(typeof RouteId);
  console.log(typeof anunims);

  useEffect(() => {
    posttoserver();
  }, [Messege]);

  const posttoserver = () => {
    axios
      .post(
        "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/reports/",
        {
          id: null,
          type: null,
          RouteId: 2,
          UserId: null,
          StudentId: null,
          message: Messege,
          involvedStudents: null,
          anonymousMessage: null,
          address: null,
          image: null,
          subject: null,
          date: Dateofcase,
          createdAt: "2020-07-21T20:18:50.000Z",
          updatedAt: "2020-07-21T20:18:50.000Z",
          deletedAt: null,
          anonymousMessage: anunims,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(Messege);
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
      <Losts children={[StudentName]} type="lost" onSubmit={onSubmit1} />
    </div>
  );
}

export default Screen5;
