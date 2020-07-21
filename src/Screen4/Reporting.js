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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
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
              <br></br>
              אבדה
            </div>
            <div className="button">
              <img src="logo192.png" alt="" className="button2" />
              <br></br>
              מציאה
            </div>

            <div className="button">
              <img src="logo192.png" alt="" className="button3" />
              <br></br>
              אלימות
            </div>
            <div className="button">
              <img src="logo192.png" alt="" className="button4" />
              <br></br>
              תלונה
            </div>

            <div className="button">
              <img src="logo192.png" alt="" className="button5" />
              <br></br>
              מילה טובה
            </div>
            <div>
              <img src="logo192.png" alt="" className="button6" />
              <br></br>
              פנייה למוקד
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Reporting;
