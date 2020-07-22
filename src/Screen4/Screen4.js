import React from "react";
// import logo from "./logo.svg";
import "./Screen4.css";
import GoogleApiWrapper from "./Components/GoogleApiWrapper/GoogleApiWrapper";
//import StudentList from "./Studentlist";
import { Button } from "antd";
import Carousel from "./Components/Carousel/Carousel";
import ridesMock from "./rides.mock";
import RefreshButton from "./Components/RefreshButton/RefreshButton";
import RouteButton from "./Components/RouteButton/RouteButton";

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
      lat: 31.864347,
      lng: 35.160679,
      desc: "bus location",
    },
  ];

  //const [products, setProducts] = useState([]);

  // const { TabPane } = Tabs;
  // console.log(ridesMock);
  // console.log("----------------");

  // let studentRidesInfo = [];
  // console.log(ridesMock.rides);
  // for (let ridesInd = 0; ridesInd < ridesMock.rides.length; ridesInd++) {
  //   studentRidesInfo.push([{rides[ridesInd].statTime}]);
  //   console.log(ridesMock.rides[ridesInd]);
  // }

  return (
    <div className="Screen4">
      <div className="routeDirButtons">
        <div className="routeBtn selected">
          <RouteButton text={"הלוך"} />
        </div>
        <div className="routeBtn">
          <RouteButton text={"חזור"} />
        </div>
      </div>

      {/* <Button className="routeDir" type="link">
        הלוך
      </Button>
      <Button className="routeDir" type="link" disabled>
        חזור
      </Button> */}
      {/* <div className="routeDirTab">
        <RouteDirTab />
      </div> */}
      <div className="mapWrapper">
        <span className="refreshBtn">
          <RefreshButton />
        </span>
        <GoogleApiWrapper coordinates={coordinates} />
      </div>
      <div className="swiperWrapper">
        <Carousel
          students={students}
          studentRouteInfo={studentRouteInfo}
          studentRouteTimes={studentRouteTimes}
        />
      </div>
    </div>
  );
};
export default Screen4;
