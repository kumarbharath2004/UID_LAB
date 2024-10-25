// src/components/Forecast.js
import React from 'react';

const Forecast = ({ forecastData }) => {
  if (!forecastData) return null;

  return (
    <div>
      <h2>5-Day Forecast</h2>
      <div className="forecast-container">
        {forecastData.list.slice(0, 5).map((item, index) => (
          <div key={index}>
            <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
            <p>Temp: {item.main.temp} °C</p>
            <p>{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
