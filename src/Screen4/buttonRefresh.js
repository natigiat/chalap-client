import React from "react";
// import logo from "./logo.svg";
import "./buttonRefresh.css";
import { Button } from "antd";

const RefreshButton = (props) => {
  //const [products, setProducts] = useState([]);

  return (
    <Button className="refresh" onClick={props.updateBusLocations}></Button>
  );
};

export default RefreshButton;
