import React, { useEffect, useState } from "react";

async function loadItems() {
  const response = await fetch(
    "https://www.7timer.info/bin/api.pl?lon=127.354&lat=36.382&product=civillight&output=json"
  );
  const data = await response.json();
  return data.dataseries.slice(0, 3);
}

function ApiSection() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await loadItems();
      setWeather(weatherData);
    };

    fetchWeather();
  }, []);

  return (
    <div className="ApiSection">
      <ul className="weather">
        {weather &&
          weather.map((data, index) => (
            <li key={index}>
              <p>{`날짜: ${data.date}`}</p>
              <p>{`날씨: ${data.weather}`}</p>
              <span>{`온도: ${data.temp2m.min}°C ~ ${data.temp2m.max}°C`}</span>
            </li>
          ))}
      </ul>
      <div className="index-list">
        <div>감기지수</div>
        <div>식중독지수</div>
        <div>기타지수</div>
      </div>
    </div>
  );
}

export default ApiSection;
