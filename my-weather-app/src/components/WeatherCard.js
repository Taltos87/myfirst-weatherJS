import React from 'react';

const WeatherCard = ({ weatherData }) => {
  return (
    <div>
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
