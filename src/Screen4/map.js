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
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
      // backgroundImage: `url(/marker.png)`,
      // width: "10px",
      // height: "10px",
      // backgroundImage: "/marker.png",
    }}
  >
    {text}
  </div>
);

const Map = (props) => {
  const defaultProps = {
    center: {
      lat: props.coordinates[0].lat,
      lng: props.coordinates[0].lng,
    },
    zoom: 11,
  };
  console.log(defaultProps.center);
  console.log(props.coordinates[0].lat);
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBRcSVADr0_EbDMWNQP94bV-M2AJQSXUmU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {props.coordinates.map((cord) => (
          <AnyReactComponent
            lat={cord.lat}
            lng={cord.lng}
            text={cord.desc}
            img="/marker.png"
          />
        ))}
        {/* <AnyReactComponent
          lat={props.coordinates[0].lat}
          lng={props.coordinates[0].lng}
          text="Home"
          img="/marker.png"
        /> */}
        {/* <AnyReactComponent
          lat={props.coordinates[1].lat}
          lng={props.coordinates[1].lng}
          text="School"
          img="/marker.png"
        />
        <AnyReactComponent
          lat={props.coordinates[2].lat}
          lng={props.coordinates[2].lng}
          text="BusLocation"
          img="/marker.png"
        /> */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
