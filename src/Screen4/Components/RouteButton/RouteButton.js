import React from "react";
// import logo from "./logo.svg";
import "./RouteButton.css";
import { Button } from "antd";

const RouteButton = (props) => {
  //const [products, setProducts] = useState([]);

  return (
    <Button
      className="route"
      type="link"
      block
      onClick={props.updateBusLocations}
    >
      {props.text}
    </Button>
  );
};

export default RouteButton;
