import React, { createContext, useState, useEffect, useContext } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [city, setCity] = useState('New York'); // Default city
  const [unit, setUnit] = useState('imperial'); // Default to Fahrenheit
  const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  };

  const fetchCurrentWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      const data = await response.json();
      setCurrentWeatherData(data);
    } catch (error) {
      console.error('Failed to fetch current weather:', error);
    }
  };

  useEffect(() => {
    fetchWeather();
    fetchCurrentWeather();
  }, [city, unit]);

  return (
    <WeatherContext.Provider value={{ weatherData, currentWeatherData, setCity, setUnit, unit }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
