import React from "react";

const MainUserLocation = ({ data }) => {
  return data ? (
    <ul>
      user IP {data.ip} with it’s location on the map latitude {data.latitude}{" "}
      longitude {data.longitude}
    </ul>
  ) : (
    " no data yet"
  );
};

export default MainUserLocation;
