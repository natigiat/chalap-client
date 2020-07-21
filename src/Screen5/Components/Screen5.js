import React from "react";
import GoodWord from "./GoodWord/GoodWord";
import Complain from "./Complain/Complain ";
import Vioelence from "./Violence/Violence";
import Losts from "./Losts/Losts";

function Screen5() {
  // const type = ["Losts", "Unusual Events", "Drive problems"];
  // const names = ["Ayelet Ben Dahan", "Shimrit Levi", "Yuval Dayan"];

  return (
    <div>
      <GoodWord />
      <Complain />
      <Vioelence />
      <Losts />
    </div>
  );
}

export default Screen5;
