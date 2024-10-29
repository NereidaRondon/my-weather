import React from 'react';
import { Link } from 'react-router-dom';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const WeatherCard = ({ weather, unit }) => {
  const formattedDate = new Date(weather.dt_txt).toISOString().split('T')[0];

  return (
    <Link to={`/detail/${formattedDate}`} className='weather-card'>
      <h3 className='forecast-date'>{formatDate(weather.dt_txt)}</h3>
      <h4 className='temp'>
        {Math.round(weather.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
      </h4>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
        width='75'
      />
      <p className='condition'>{weather.weather[0].description}</p>
    </Link>
  );
};

export default WeatherCard;
