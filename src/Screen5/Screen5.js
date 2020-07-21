import React from "react";
import GoodWord from "./components/GoodWord/GoodWord";
import Complain from "./components/Complain/Complain";
import Vioelence from "./components/Violence/Violence";
import Losts from "./components/Losts/Losts";

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
