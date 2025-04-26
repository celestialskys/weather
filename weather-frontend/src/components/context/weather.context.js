import { createContext, useEffect, useState } from 'react';
import {DEFAULT_PLACE} from '../constants/index';
import { WeatherOpenApi } from '../../utilities/ApiService';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [hourlyForcast, setHourlyForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [place, setPlace] = useState(DEFAULT_PLACE);
  
  useEffect(() => {
    const _getWeatherData = async () => {
      setIsLoading(true);
      setError(false);
      const units = 'metric'
      try {
        const [weatherData, hourlyForcast, weekForecast] = await Promise.all([
          WeatherOpenApi({
              path: 'weather',
              params: { 
                lat: place.lat,
                lon: place.lon,
                units: units || 'metric'}
          }),

          WeatherOpenApi({
            path: 'forecast/hourly',
            params: { 
              lat: place.lat,
              lon: place.lon,
              units: units || 'metric'}
          }),

          WeatherOpenApi({
            path: 'forecast/daily',
            params: { 
              lat: place.lat,
              lon: place.lon,
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
    _getWeatherData()
  }, [place])
  debugger
  return (
    <WeatherContext.Provider
      value={{
        place,
        setPlace,
        weatherData,
        hourlyForcast,
        weekForecast,
        isLoading,
        error
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}