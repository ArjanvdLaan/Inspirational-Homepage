import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './components/WeatherBox/WeatherBox.jsx';

export default configureStore({
    reducer: {
      weather: weatherReducer
    }
  });