import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Forecast = ({ forecast, unit }) => {
  const cut = forecast.list.slice(0, 10);
  const getHoursName = h => {
    return h > 12 ? `${h - 12} PM` : `${h} AM`;
  };
  const data = cut.map(e => {
    return {
      time: `${getHoursName(new Date(e.dt * 1000).getHours())}`,
      Temp:
        unit === "c"
          ? Math.round(e.main.temp)
          : Math.round((e.main.temp * 9) / 5 + 32)
    };
  });

  const responsiveWitdth = () => {
    const maxWidth = 500;
    const width = window.innerWidth - 10;
    return width > maxWidth ? maxWidth : width;
  };

  return (
    <div className="forecast">
      <LineChart width={responsiveWitdth()} height={200} data={data}>
        <Line type="monotone" dataKey="Temp" />
        <XAxis dataKey="time" />
        <YAxis domain={["dataMin-1", "dataMax+1"]} />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Forecast;
