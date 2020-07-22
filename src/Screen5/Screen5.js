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
        console.log("DATA", response.data);
        setStudentName(response.data);
        // setthisURL(window.location.href);
      });
  }, []);
  //"thisType" הקוד לוקח את החלק האחרון של הכתובת ומכניס למשתנה
  let parts = thisURL.split("/");
  // let thisType = "vioelence";
  let thisType = parts[parts.length - 1];
  console.log("thisType=", thisType);

  const [Messege, setMessege] = useState();
  const [StudentId, setStudentId] = useState();
  const [Dateofcase, setDate] = useState();
  const [RouteId, setRouteId] = useState();
  const [anunims, setanunims] = useState();

  const onSubmit1 = (value) => {
    // console.log(value.type);
    setMessege(String(value.Messege));
    setStudentId(value.StudentId);
    setDate(String("2020-07-08 00:00:00"));
    setRouteId(String(value.RouteId));
    setanunims(value.anunims);
  };
  console.log(Dateofcase);

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

  return (
    <div className="form">
      <GoodWord
        children={[StudentName]}
        type="good_word"
        onSubmit={onSubmit1}
      />
    </div>
  );
}

export default Screen5;
