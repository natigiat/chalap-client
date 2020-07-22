import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./GoogleApiWrapper.css";

const MapContainer = (props) => {
  console.log(props);
  console.log(props.coordinates[0].lat);
  console.log(props.coordinates[2].lat);
  return (
    <Map
      google={props.google}
      style={{ width: "100%", height: "100%", position: "relative" }}
      initialCenter={{
        lat: props.coordinates[0].lat,
        lng: props.coordinates[0].lng,
      }}
      className={"map"}
      zoom={11}
    >
      <Marker
        title={"בית"}
        name={"Home"}
        position={{
          lat: props.coordinates[0].lat,
          lng: props.coordinates[0].lng,
        }}
        icon={{
          url: "https://image.flaticon.com/icons/svg/609/609803.svg",
          anchor: new props.google.maps.Point(
            props.coordinates[0].lat,
            props.coordinates[0].lng
          ),
          scaledSize: new props.google.maps.Size(
            props.coordinates[0].lat,
            props.coordinates[0].lng
          ),
        }}
      />

      <Marker
        title={"ביה'ס"}
        name={"School"}
        position={{
          lat: props.coordinates[1].lat,
          lng: props.coordinates[1].lng,
        }}
        icon={{
          url: "https://image.flaticon.com/icons/svg/926/926379.svg",
          anchor: new props.google.maps.Point(
            props.coordinates[1].lat,
            props.coordinates[1].lng
          ),
          scaledSize: new props.google.maps.Size(
            props.coordinates[1].lat,
            props.coordinates[1].lng
          ),
        }}
      />

      <Marker
        name={"Your position"}
        position={{
          lat: props.coordinates[2].lat,
          lng: props.coordinates[2].lng,
        }}
        icon={{
          url: "https://image.flaticon.com/icons/svg/808/808375.svg",
          anchor: new props.google.maps.Point(
            props.coordinates[2].lat,
            props.coordinates[2].lng
          ),
          scaledSize: new props.google.maps.Size(
            props.coordinates[2].lat,
            props.coordinates[2].lng
          ),
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBRcSVADr0_EbDMWNQP94bV-M2AJQSXUmU",
})(MapContainer);
