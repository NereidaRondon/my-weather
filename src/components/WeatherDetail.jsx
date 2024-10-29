import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWeather } from '../WeatherContext';

const WeatherDetail = () => {
  const { date } = useParams();
  const { weatherData } = useWeather();

  // Format the date to show only the month and day
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  // Find the specific day’s data by matching the date
  const dayWeather = weatherData?.list.find(
    (weather) => new Date(weather.dt_txt).toISOString().split('T')[0] === date
  );

  if (!dayWeather) {
    return <p>Loading weather data for this date...</p>;
  }

  return (
    <div className='weather-detail'>
      <Link to='/' className='back-link'>
        ← Back to Home
      </Link>
      <h2>
        Weather Details for
        <br /> {formattedDate}
      </h2>
      <div className='today-weather'>
        <h3 className='current-temp'>{Math.round(dayWeather.main.temp)}°</h3>
        <img
          src={`https://openweathermap.org/img/wn/${dayWeather.weather[0].icon}@2x.png`}
          alt={dayWeather.weather[0].description}
          width='100'
        />
        <p className='condition'>{dayWeather.weather[0].description}</p>
        <br />
        <br />
        <p className='stats'>Humidity: {dayWeather.main.humidity}%</p>
        <p className='stats'>Wind Speed: {dayWeather.wind.speed} mph</p>
      </div>
    </div>
  );
};

export default WeatherDetail;
