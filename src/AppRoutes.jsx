import { Routes, Route } from 'react-router-dom';
import WeatherDetail from './components/WeatherDetail';

const AppRoutes = ({ weatherData }) => {
  return (
    <Routes>
      {/* Weather Detail Route */}
      <Route path='/detail/:date' element={<WeatherDetail weatherData={weatherData} />} />
    </Routes>
  );
};

export default AppRoutes;
