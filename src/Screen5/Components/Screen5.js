import React from "react";
import GoodWord from "./GoodWord/GoodWord";
import Complain from "./Complain/Complain";
import Vioelence from "./Violence/Violence";
import Losts from "./Losts/Losts";
import "../Screen5.css";

function Screen5() {
  const names = ["Ayelet Ben Dahan", "Shimrit Levi", "Yuval Dayan"];
  const onSubmit1 = (value) => {
    console.log(value);
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
