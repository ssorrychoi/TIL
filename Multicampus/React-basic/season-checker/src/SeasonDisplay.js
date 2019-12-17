import React from "react";
import "./SeasonDisplay.css";

const getSeason = (month, lat) => {
  if (month > 3 && month < 10) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const seasonConfig = {
  Summer: {
    text: "겨땀",
    iconName: "sun"
  },
  Winter: {
    text: "롱패딩",
    iconName: "snowflake"
  }
};

const SeasonDisplay = props => {
  const season = getSeason(new Date().getMonth() + 1, props.lat);
  const { text, iconName } = seasonConfig[season];
  return (
    <>
      <div className={`season-display ${season}`}>
        <i className={`icon ${iconName} massive upper-left`} />
        <h1>Season</h1>
        <h2>{text}</h2>
        <i className={`icon ${iconName} massive bottom-right`} />
      </div>
      <div className="season-display Summer">
        <i className="icon sun massive upper-left" />
        <h1>Season</h1>
        <h2>{text}</h2>
        <i className="icon sun massive bottom-right" />
      </div>
    </>
  );
};

export default SeasonDisplay;
