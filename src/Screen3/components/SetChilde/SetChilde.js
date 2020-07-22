import React from "react";
import "./setChilde.css";
import { Button } from "antd";

const MySons = () => {
  return (
    <div className="setData">
      <div className="textSetData">
        עזור לנו להציג את הנתונים הרלוונטים עבורך
      </div>

      <Button className="set" type="primary">
        הגדר
      </Button>

      <Button className="later" type="primary">
        אחר כך
      </Button>
    </div>
  );
};

export default MySons;
