import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS file
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import { getWeatherData } from './api/weatherapi';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError('City not found or unable to fetch data');
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Weather Forecasting System</h1>
        <SearchBar onSearch={handleSearch} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Weather weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;

