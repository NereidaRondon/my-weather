import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import WeatherDetail from './components/WeatherDetail';
import { WeatherProvider } from './WeatherContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <WeatherProvider>
        <Routes>
          {/* Home Route */}
          <Route path='/' element={<App />} />
          {/* Detail Route */}
          <Route path='/detail/:date' element={<WeatherDetail />} />
        </Routes>
      </WeatherProvider>
    </Router>
  </StrictMode>
);
