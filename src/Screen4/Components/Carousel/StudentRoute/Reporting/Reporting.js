import "./Reporting.css";
import React, { useState } from "react";
import { Modal, Button } from "antd";
import ReportButton from "./ReportButton/ReportButton.js";

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
  const reportButtons = [
    { id: 1, title: "מציאה", img: "logo192.png", link: "find" },
    { id: 1, title: "אבדה", img: "logo192.png", link: "lost" },
    { id: 1, title: "אלימות", img: "logo192.png", link: "violence" },
    { id: 1, title: "תלונה", img: "logo192.png", link: "report" },
    { id: 1, title: "מילה טובה", img: "logo192.png", link: "good_word" },
    { id: 1, title: "פנייה למוקד", img: "logo192.png", link: "moked" },
  ];

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
            {reportButtons.map((reportButton) => (
              <ReportButton
                id={reportButton.id}
                title={reportButton.title}
                img={reportButton.img}
                link={reportButton.link}
              />
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Reporting;
