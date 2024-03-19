import React from "react";

export default function getLocation() {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    return console.log("Geolocation is not supported by this browser.");
  }

  function showPosition(position) {
    return [position.coords.latitude, position.coords.longitude];
  }
}
