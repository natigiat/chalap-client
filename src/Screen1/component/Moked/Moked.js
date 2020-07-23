import "./Moked.css";

import React from "react";
import { Form } from "antd";

function Moked(props) {
  return (
    <div >
      <Form name="control-hooks">
        <div >
          <div className="mokedText">
            לא קיבלת קוד?
            <br />
            פנה לחברה לפיתוח בנימין
            <br />
            02-9976108
          </div>
          <a href="tel:0523114547" className="callButton">
            התקשר
          </a>
        </div>
      </Form>
    </div>
  );
}

export default Moked;