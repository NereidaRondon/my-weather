import React from 'react';

const Summary = ({ weatherData }) => {
  const totalDataPoints = weatherData.list.length;
  const averageTemp = (
    weatherData.list.slice(0, 5).reduce((acc, curr) => acc + curr.main.temp, 0) / 5
  ).toFixed(2);
  const highestTemp = Math.max(...weatherData.list.slice(0, 5).map((item) => item.main.temp));
  const lowestTemp = Math.min(...weatherData.list.slice(0, 5).map((item) => item.main.temp));

  return (
    <div className='summary'>
      <h3>Summary Statistics</h3>

      <p className='stats'>Average Temperature: {averageTemp}°</p>
      <p className='stats'>Highest Temp: {highestTemp}°</p>
      <p className='stats'>Lowest Temp: {lowestTemp}°</p>
    </div>
  );
};

export default Summary;
