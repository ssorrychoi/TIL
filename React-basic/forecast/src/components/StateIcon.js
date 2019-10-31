import React from "react";

const StateIcon = ({ icon }) => {
  return (
    <div>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather"
      />
    </div>
  );
};

export default StateIcon;
