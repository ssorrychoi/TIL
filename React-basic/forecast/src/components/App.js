import React, { useState, useEffect } from "react";
import Axios from "axios";

import Current from "./Current";
import Forecast from "./Forecast";
import Spinner from "./Spinner";
import "./App.css";

const App = () => {
  const AppID = "313ed19fb1a4d1722fa97275e49cbbef";
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  const getTemp = async coords => {
    const { latitude: lat, longitude: lon } = coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${AppID}`;
    const res = await Axios.get(url);
    console.log(res);
    const { data } = res;
    setCurrent(data);
  };

  const getHourlyTemp = async coords => {};

  const getAll = async () => {
    try {
      const { coords } = await getLocation();
      await getTemp(coords);
      await getHourlyTemp(coords);
    } catch {
      alert("위치 동의 해주세요.");
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <header className="header-padding">
        <h1>Weather Forecast Service</h1>
      </header>
      <main className="container">
        {!current ? <Spinner /> : <Current current={current} />}
        <Forecast />
      </main>
    </>
  );
};

export default App;
