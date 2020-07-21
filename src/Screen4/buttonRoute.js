import React from "react";
// import logo from "./logo.svg";
import "./buttonRoute.css";
import { Button } from "antd";

const ButtonRoute = (props) => {
  //const [products, setProducts] = useState([]);

  return <Button className="route" onClick={props.updateBusLocations}></Button>;
};

export default ButtonRoute;
