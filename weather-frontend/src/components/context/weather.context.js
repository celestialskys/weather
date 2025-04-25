import { createContext, useEffect, useState } from 'react';
import {DEFAULT_PLACE} from '../constants/index';
import { WeatherOpenApi } from '../../utilities/ApiService';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForcast, setHourlyForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [place, setPlace] = useState(DEFAULT_PLACE);
  debugger
  const getWeatherData = async (lat, lon, units) => {
    setIsLoading(true);
    setError(false);
    debugger
    try {

      const [weatherData, hourlyForcast, weekForecast] = await Promise.all([
        WeatherOpenApi({
            path: 'weather',
            params: { 
              lat: lat,
              lon: lon,
              units: units || 'metric'}
        }),

        WeatherOpenApi({
          path: 'forecast/hourly',
          params: { 
            lat: lat,
            lon: lon,
            units: units || 'metric'}
        }),

        WeatherOpenApi({
          path: 'forecast/daily',
          params: { 
            lat: lat,
            lon: lon,
            units: units || 'metric'}
        })
      ])

      debugger
      setWeatherData(weatherData)
      setWeekForecast(weekForecast)
      setHourlyForecast(hourlyForcast)
    }catch (err) {
      console.error('Failed to fetch weather data:', err);
      setError(true);
    }
    setIsLoading(false);
  }

  return (
    <WeatherContext.Provider
      value={{
        place,
        setPlace,
        weatherData,
        hourlyForcast,
        weekForecast,
        isLoading,
        error,
        getWeatherData, // 💡 Pass this down
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}