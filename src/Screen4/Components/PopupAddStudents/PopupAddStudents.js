import React, { useState, useEffect } from "react";
import "./PopupAddStudents.css";
// import Popup from "reactjs-popup";

const PopupAddStudents = (props) => {
  return (
    // <Popup
    //   className="popupAddStudents"
    //   trigger={<button className="popupTrigger"></button>}
    //   position="top center"
    //   closeOnDocumentClick
    //   open
    // >
    <div className="popupAdd">
      <img src="/images/profileImage.png"></img>
      <div className="missingText">נראה שחסר פה מישהו</div>

      <button className="btnAddStudents">+ הוספת ילדים</button>
    </div>
    // </Popup>
  );
};

export default PopupAddStudents;
