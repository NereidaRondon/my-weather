import { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import Filters from './components/Filters';
import Summary from './components/Summary';
import TodayWeather from './components/TodayWeather';
import './App.css';

const App = () => {
  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('imperial'); // Fahrenheit by default
  const [filterCondition, setFilterCondition] = useState('all');
  const [forecastType, setForecastType] = useState('5day'); // Default to 5-day forecast

  const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

  // Function to fetch weather data using fetch API
  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    }
  };

  // Function to fetch current weather data
  const fetchCurrentWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setCurrentWeatherData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setCurrentWeatherData(null);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather(city);
      setCity('');
    }
  };

  // Toggle between Celsius and Fahrenheit
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'imperial' ? 'metric' : 'imperial'));
  };

  // Handle filter for today's forecast or 5-day forecast
  const handleForecastTypeChange = (e) => {
    setForecastType(e.target.value);
  };

  // Group the data by day, selecting only one entry per day (preferably around noon)
  const groupByDay = (list) => {
    if (!list || list.length === 0) return [];
    const days = {};
    list.forEach((entry) => {
      const date = new Date(entry.dt_txt).toLocaleDateString('en-US');
      if (!days[date] && new Date(entry.dt_txt).getHours() === 12) {
        days[date] = entry;
      }
    });
    return Object.values(days).slice(0, 5); // Get only 5 days
  };

  // Apply filters for weather condition and forecast type
  const filteredWeatherData =
    weatherData?.list?.filter((weather) => {
      const weatherCondition = weather.weather[0].main.toLowerCase();
      if (filterCondition !== 'all' && weatherCondition !== filterCondition.toLowerCase()) {
        return false;
      }
      return true;
    }) || [];

  // Group filtered data by day for 5-day forecast or filter today's data
  const groupedWeatherData =
    forecastType === '5day'
      ? groupByDay(filteredWeatherData)
      : filteredWeatherData.filter(
          (weather) => new Date(weather.dt_txt).getDate() === new Date().getDate()
        );

  useEffect(() => {
    // Fetch the weather data for the current city (default 'New York') whenever the unit or city changes
    fetchWeather(city);
    fetchCurrentWeather(city);
  }, [unit, city]); // Re-fetch data if unit or city changes

  return (
    <div className='app'>
      <h1>🌦️My Weather</h1>

      <div className='search-div'>
        {/* Search Bar */}
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Enter city or ZIP code'
          />
          <button type='submit'>Search</button>
        </form>
      </div>

      {/* Error Display */}
      {error && <p>{error}</p>}

      {/* Filters */}
      {weatherData && !error && (
        <>
          <div className='filters'>
            <Filters handleConditionChange={(e) => setFilterCondition(e.target.value)} />

            <div className='forecast-type'>
              <label htmlFor='forecast-type'>Show: </label>
              <select id='forecast-type' onChange={handleForecastTypeChange}>
                <option value='5day'>5-Day Forecast</option>
                <option value='today'>Today's Forecast</option>
              </select>
            </div>
            <div className='unit-toggle'>
              <button onClick={toggleUnit}>
                {unit === 'imperial' ? 'Switch to Celsius' : 'Switch to Fahrenheit'}
              </button>
            </div>
          </div>
          <h2>{weatherData.city.name}</h2>
          {currentWeatherData && <TodayWeather currentWeather={currentWeatherData} />}{' '}
          {/* Weather Cards */}
          <div className='weather-grid'>
            {groupedWeatherData.length > 0 ? (
              groupedWeatherData.map((weather, index) => (
                <WeatherCard key={index} weather={weather} unit={unit} />
              ))
            ) : (
              <p>No weather data available for the selected condition.</p>
            )}
          </div>
          {/* Summary Statistics */}
          <Summary weatherData={weatherData} />
        </>
      )}
    </div>
  );
};

export default App;
