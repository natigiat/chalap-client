import React from "react";
import { Alert } from "antd";
import "./alrts.css";
function Alerts(props) {
  return (
    <div>
      screen alert
      <div className="alrt1">
        <Alert message={props.message} description={props.description} />
      </div>
    </div>
  );
}

export default Alerts;
