import React from "react";
import GoodWord from "./Components/GoodWord/GoodWord";
import Complain from "./Components/Complain/Complain";
import Vioelence from "./Components/Violence/Violence";
import Losts from "./Components/Losts/Losts";
import "./Screen5";

function Screen5() {
  // const type = ["Losts", "Unusual Events", "Drive problems"];
  // const names = ["Ayelet Ben Dahan", "Shimrit Levi", "Yuval Dayan"];

  return (
    <div>
      {/* <GoodWord />
      <Complain /> */}
      <Vioelence />
      {/* <Losts /> */}
    </div>
  );
}

export default Screen5;
