import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import WeatherCard from './components/WeatherCard';

const API_KEY = '2bcda0ef514ca396d716955408357744';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (error) {
      setWeatherData(null);
      setError('City not found');
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form
        city={city}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
