import React, { useState } from "react";
import { Button } from "antd";
import "./Children.css";

function Children(props) {
  return (
    <div className="children">
      <div>
        <div>{props.name}</div>
        <div>{props.phone}</div>
        <div>{props.school}</div>
      </div>

      <div>
        <Button type="primary">הרשאות</Button>
        <Button type="primary">תחנה קרובה</Button>
        <Button type="primary">מערכת שעות</Button>
      </div>
    </div>
  );
}

export default Children;
