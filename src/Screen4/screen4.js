import React from "react";
// import logo from "./logo.svg";
import "./screen4.css";
import GoogleApiWrapper from "./map";
import StudentList from "./Studentlist";
import ShuttleTravelRoute from "./ShuttleTravelRoute";
import { Button } from "antd";

const Screen4 = (props) => {
  //const [routeDirection, setRouteDirection] = useState("הלוך");

  //   useEffect(() => {
  //     // axios.get("https://quilt-flax-chemistry.glitch.me/products").then((res) => {
  //     //     setRouteDirection(res.data);

  //     // });
  //   }, routeDirection);

  const students = [
    {
      id: 1,
      name: "shimon",
    },
    {
      id: 2,
      name: "yaakov",
    },
    {
      id: 3,
      name: "yosef",
    },
  ];

  const coordinates = [
    { lat: 31.864347, lng: 35.260679, desc: "home" },
    { lat: 31.932534, lng: 35.022965, desc: "school" },
    {
      lat: -40,
      lng: 160,
      desc: "bus location",
    },
  ];

  //const [products, setProducts] = useState([]);

  return (
    <div className="Screen4">
      {/* <div><StudentList students={students} onChange={setStudentData}/></div> */}
      <Button
        className="routeDir"
        type="link"
        //onClick={setRouteDirection("הלוך")}
      >
        הלוך
      </Button>
      <Button
        className="routeDir"
        type="link"
        //onClick={setRouteDirection("חזור")}
      >
        חזור
      </Button>
      <GoogleApiWrapper coordinates={coordinates} />
      {/* <ShuttleTravelRoute path={path} routeTimes={routeTimes} /> */}
      <Reporting />
    </div>
  );
};

export default Screen4;
