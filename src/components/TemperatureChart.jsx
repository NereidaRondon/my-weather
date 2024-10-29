import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const TemperatureChart = ({ forecastData }) => {
  // Prepare data for the chart with dates and temperatures
  const chartData = forecastData.map((item) => ({
    date: new Date(item.dt_txt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    temperature: item.main.temp,
  }));

  return (
    <div className='temperature-chart'>
      <h3>5-Day Temperature Trend</h3>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey='date' />
          <YAxis label={{ value: 'Temp (°F)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
          <Line type='monotone' dataKey='temperature' stroke='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;
