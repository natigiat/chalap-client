import React from "react";
import GoodWord from "./GoodWord/GoodWord";
import Complain from "./Complain/Complain";
import Vioelence from "./Violence/Violence";
import Losts from "./Losts/Losts";
import "../Screen5.css";

function Screen5() {
  const names = ["Ayelet Ben Dahan", "Shimrit Levi", "Yuval Dayan"];

  return (
    <div>
      <GoodWord children={[names]} type="good_word" />
      <Complain children={[names]} type="report" />
      <Vioelence children={[names]} type="vioelence" />
      <Losts children={[names]} type="lost" />
    </div>
  );
}

export default Screen5;
