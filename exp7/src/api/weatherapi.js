import axios from 'axios';

const API_KEY = 'bba448aacd921463ec3d8f8f23c94c2d'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: city,       // City name
        appid: API_KEY, // Your API key
        units: 'metric', // Get temperature in Celsius
      },
    });
    return response.data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    throw error; // Throw error for handling in component
  }
};

