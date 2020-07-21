import React from "react";
// import logo from "./logo.svg";
import "./Screen4.css";
import GoogleApiWrapper from "./Components/GoogleApiWrapper/GoogleApiWrapper";
//import StudentList from "./Studentlist";
import { Button } from "antd";
import { Tabs } from "antd";
import Carousel from "./Components/Carousel/Carousel";
import ridesMock from "./rides.mock";
import RefreshButton from "./Components/RefreshButton/RefreshButton";

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

  const studentRouteInfo = [
    {
      startPoint: "בני אדם",
      endPoint: "מעלה מכמש",
    },
    {
      startPoint: "מעלה מכמש",
      endPoint: "כוכב יעקב",
    },
    {
      startPoint: "אש קודש",
      endPoint: "שילה",
    },
  ];
  const studentRouteTimes = [
    ["08:30", "09:00", "10:00"],
    ["08:30", "09:30", "10:30"],
    ["08:10", "08:40"],
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

  // const { TabPane } = Tabs;
  // console.log(ridesMock);
  // console.log("----------------");
  // let studentRidesInfo = [];
  // for (let ridesInd = 0; ridesInd < rides.length; ridesInd++) {
  //   studentRidesInfo.push(rides[ridesInd]);
  // }

  return (
    <div className="Screen4">
      {/* <div><StudentList students={students} onChange={setStudentData}/></div> */}
      <Button className="routeDir" type="link">
        הלוך
      </Button>
      <Button className="routeDir" type="link" disabled>
        חזור
      </Button>
      <RefreshButton />
      {/* <Tabs defaultActiveKey="1">
        <TabPane className="routeTab" tab="הלוך" key="1"></TabPane>
        <TabPane className="routeTab" tab="חזור" key="2" disabled></TabPane>
      </Tabs> */}
      <GoogleApiWrapper coordinates={coordinates} />
      {/* <ShuttleTravelRoute path={path} routeTimes={routeTimes} /> */}
      <Carousel
        students={students}
        studentRouteInfo={studentRouteInfo}
        studentRouteTimes={studentRouteTimes}
      />
    </div>
  );
};

export default Screen4;
