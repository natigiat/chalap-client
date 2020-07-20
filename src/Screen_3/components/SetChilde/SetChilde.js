import React from "react";
import "./setChilde.css";
import { Button } from "antd";

const MySons = () => {
  return (
    <div className="setData">
      <div className="borderSet">
        <button className="fram16">x</button>
        <div className="textSetData">
          בואו לדייק את ההסעות של ילדיכם
          <Button className="set" type="primary">
            הגדר
          </Button>
          <br></br>
          <Button className="later" type="primary">
            אחר כך
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MySons;
