import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

// const AnyReactComponent = ({ text, img }) => (
//   <div>
//     <img className="Marker" src={img} alt=""></img>
//     {text}
//   </div>
// );

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      // color: "white",
      // background: "grey",
      // padding: "15px 10px",
      // display: "inline-flex",
      // textAlign: "center",
      // alignItems: "center",
      // justifyContent: "center",
      // borderRadius: "100%",
      // transform: "translate(-50%, -50%)",
      backgroundImage: `url(/marker.png)`,
      // backgroundImage: "/marker.png",
    }}
  >
    {text}
  </div>
);

const Map = (props) => {
  const defaultProps = {
    center: {
      lat: props.defaultLocation.lat,
      lng: props.defaultLocation.lng,
    },
    zoom: props.defaultLocation.zoom,
  };
  console.log(props.coordinates[0].lat);
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBRcSVADr0_EbDMWNQP94bV-M2AJQSXUmU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={props.coordinates[0].lat}
          lng={props.coordinates[0].lng}
          text="Home"
          img="/marker.png"
        />
        <AnyReactComponent
          lat={props.coordinates[1].lat}
          lng={props.coordinates[1].lng}
          text="School"
          img="/marker.png"
        />
        <AnyReactComponent
          lat={props.busLocation[0].lat}
          lng={props.busLocation[0].lng}
          text="BusLocation"
          img="/marker.png"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
