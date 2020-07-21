import React from "react";
import "./Reporting.css";
// import { Divider, Timeline } from "antd";
// import {} from "@ant-design/icons";

import Popup from "reactjs-popup";

const Reporting = () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>
      <div>
        {" "}
        <h2>דיווח על</h2>{" "}
      </div>
      <div>
        <div>
          <img src="logo192.png" alt="" />
          אבדה
        </div>
        <div>
          <img src="logo192.png" alt="" />
          מציאה
        </div>
        <div>
          <img src="logo192.png" alt="" />
          אלימות
        </div>
        <div>
          <img src="logo192.png" alt="" />
          תלונה
        </div>
        <div>
          <img src="logo192.png" alt="" />
          מילה טובה
        </div>
        <div>
          <img src="logo192.png" alt="" />
          פנייה למוקד
        </div>
      </div>
    </div>
  </Popup>
);

// const Reporting = (props) => {
//   return (
//     <div className="frame">
//       <div className="reporting">
//         <div className="header">
//           <div className="report">דיווח על</div>
//           <div className="x">x</div>
//         </div>
//         <div className="cycle">
//           <div></div>
//           <div>Text</div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Reporting;
