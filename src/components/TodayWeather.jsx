const TodayWeather = ({ currentWeather }) => {
  return (
    <div className='today-weather'>
      <h3>Currently</h3>
      <p className='current-temp'>{currentWeather.main.temp}°</p>
      <p className='stats'> Condition: {currentWeather.weather[0].description}</p>
      <p className='stats'>Humidity: {currentWeather.main.humidity}%</p>
      <p className='stats'>Wind Speed: {currentWeather.wind.speed} mph</p>
    </div>
  );
};

export default TodayWeather;
