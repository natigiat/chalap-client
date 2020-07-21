import React from "react";
import GoodWord from "./Components/GoodWord/GoodWord";
import Complain from "./Components/Complain/Complain";
import Vioelence from "./Components/Violence/Violence";
import Losts from "./Components/Losts/Losts";
import axios from "axios";

function Screen5() {
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

  return (
    <div>
      <GoodWord children={[names]} type="good_word" onSubmit={onSubmit1} />
      <Complain children={[names]} type="report" onSubmit={onSubmit1} />
      <Vioelence children={[names]} type="vioelence" onSubmit={onSubmit1} />
      <Losts children={[names]} type="lost" onSabmit={onSubmit1} />
    </div>
  );
}

export default Screen5;
