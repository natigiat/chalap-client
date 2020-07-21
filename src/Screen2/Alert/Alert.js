import React from "react";
import { Alert } from "antd";
import "./alrts.css";

function Alerts(props) {
  return (
    <div className="alrt1">
      <Alert message={props.message} description={props.description} />
    </div>
  );
}

export default Alerts;
