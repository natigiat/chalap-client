import React from "react";
import Losts from "./components/Losts/Losts"

function Screen() {
  const type = ["Losts", "Unusual Events", "Drive problems"];
  const names = ["Ayelet Ben Dahan", "Shimrit Levi", "Yuval Dayan"];

  const onFinishLosts = values => {
    console.log(values);
  };



  return <Losts onFinishLosts={onFinishLosts} />;
}

export default Screen;
