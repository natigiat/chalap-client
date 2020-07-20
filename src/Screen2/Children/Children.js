import React, { useState } from "react";

function Children(props) {
  return (
    <div className="App">
      <span>{props.name}</span>
      <span>{props.phone}</span>
      <span>{props.school}</span>
    </div>
  );
}

export default Children;
