import "./MenuLayoues.css";
import React, { useState } from "react";
import { Modal, Button } from "antd";
import Screen4 from "../Screen4/Screen4";
import Screen5 from "../Screen5/Screen5";
import Parent from "../Screen2/Screen2";
import { Link } from "react-router-dom";

const MenuLayoues = () => {
  const [page, setPage] = useState({
    page: "map",
  });
  const menuButtons = [
    { icon: "map", link: "map" },
    { icon: "alert", link: "alert" },
    { icon: "user", link: "user" },
    { icon: "settings", link: "settings" },
  ];

  const changePage = (value) => {
    console.log(value);
    setPage(value);
  };

  const renderSwitch = (page) => {
    console.log("page" + page);
    switch (page) {
      case "map":
        return <Screen4 />;

      case "alert":
        return <Screen5 />;

      case "user":
        return <Parent />;

      case "settings":
        return <Screen5 />;

      default:
        return <Screen4 />;
    }
  };

  return (
    <div>
      {renderSwitch(page)}

      <div className="menu_mobile">
        {menuButtons.map((button) => (
          <div
            className="menu_mobile_link"
            onClick={() => changePage(button.link)}
          >
            <img src={`/images/${button.icon}.png`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuLayoues;
