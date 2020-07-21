import React, { useState } from "react";
import { Modal, Button } from "antd";

const SandTable = () => {
  const [visibility, setVisiblity] = useState("false");

  const showModal = () => {
    setVisiblity("true");
  };

  const handleOk = (e) => {
    console.log(e);
    setVisiblity("false");
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisiblity("false");
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visibility}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
      </Modal>
    </>
  );
};

export default SandTable;
