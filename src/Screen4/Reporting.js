import "./Reporting.css";
import React, { useState } from "react";
import { Modal, Button } from "antd";

const Reporting = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    console.log("shoeModal");
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <>
      <div className="reporting_link" onClick={showModal}>
        עיכוב? בעיה
      </div>

      <Modal
        title="דיווח על"
        className="modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div>
            <div className="button">
              <img src="logo192.png" alt="" className="button1" />
              <br />
              <span className="reportText">אבדה</span>
            </div>
            <div className="button">
              <img src="logo192.png" alt="" className="button2" />
              מציאה
            </div>

            <div className="button">
              <img src="logo192.png" alt="" className="button3" />
              אלימות
            </div>
            <div className="button">
              <img src="logo192.png" alt="" className="button4" />
              תלונה
            </div>

            <div className="button">
              <img src="logo192.png" alt="" className="button5" />
              מילה טובה
            </div>
            <div>
              <img src="logo192.png" alt="" className="button6" />
              פנייה למוקד
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Reporting;
