import React, { useState, useEffect } from "react"; // Hook 사용법
import Axios from "axios";

import Current from "./Current";
import Forecast from "./Forecast";
import Spinner from "./Spinner";
import "./App.css";

const App = () => {
  const AppID = "313ed19fb1a4d1722fa97275e49cbbef";
  const [current, setCurrent] = useState(null); // Hook 사용법
  const [forecast, setForecast] = useState(null);
  const [unit, setUnit] = useState("c");

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  const getTemp = async coords => {
    const { latitude: lat, longitude: lon } = coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${AppID}&units=metric&lang=en`;
    const res = await Axios.get(url);
    console.log(res);
    const { data } = res;
    setCurrent(data);
  };

  const getHourlyTemp = async coords => {
    const { latitude: lat, longitude: lon } = coords;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${AppID}&units=metric&lang=en`;
    const res = await Axios.get(url);
    const { data } = res;
    setForecast(data);
  };

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
        <h1>재성이가 알려주는 오늘의 날씨</h1>
      </header>
      <main className="container">
        {!current || !forecast ? (
          <Spinner />
        ) : (
          <>
            <Current current={current} unit={unit} setUnit={setUnit} />
            <Forecast forecast={forecast} unit={unit} />
          </>
        )}
      </main>
    </>
  );
};

export default App;
