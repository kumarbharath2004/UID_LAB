import React from 'react';

const Weather = ({ weatherData }) => {
  if (!weatherData) return null; // Return null if no data

  const { name, main, weather, wind } = weatherData; // Destructure relevant properties

  return (
    <div>
      <h2>Weather in {name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Conditions: {weather[0].description}</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
