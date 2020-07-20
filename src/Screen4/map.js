import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = (props) => {
  const defaultProps = {
    center: {
      lat: props.defaultLocation.lat,
      lng: props.defaultLocation.lng,
    },
    zoom: props.defaultLocation.zoom,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBRcSVADr0_EbDMWNQP94bV-M2AJQSXUmU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={props.coordinates[0].lat}
          lng={props.coordinates[0].lng}
          text="Home"
        />
        <AnyReactComponent
          lat={props.coordinates[1].lat}
          lng={props.coordinates[1].lng}
          text="School"
        />
        <AnyReactComponent
          lat={props.busLocation[0].lat}
          lng={props.busLocation[0].lng}
          text="BusLocation"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
