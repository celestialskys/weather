import { createContext, useEffect, useState } from 'react';
import {DEFAULT_PLACE} from '../constants/index';
import { WeatherOpenApi } from '../../utilities/ApiService';

const WeatherContext = createContext();

function WeatherProvider({ children }){
  const [weatherData, setWeatherData] = useState({});
  const [hourlyForcast, setHourlyForecast] = useState({});
  const [weekForecast, setWeekForecast] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [place, setPlace] = useState(DEFAULT_PLACE);
  // const [units, setUnits] = useState({});

  useEffect(() => {
    const _getWeatherData = async () => {
      setIsLoading(true);
      setError(false);
      const units = 'metric'
      try {
        const [weatherRes, hourlyRes, weekRes] = await Promise.allSettled([
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

        if (weatherRes.status === 'fulfilled') setWeatherData(weatherRes.value);
        if (hourlyRes.status === 'fulfilled') setHourlyForecast(hourlyRes.value);
        if (weekRes.status === 'fulfilled') setWeekForecast(weekRes.value);

        if (weatherRes.status === 'rejected' || hourlyRes.status === 'rejected' || weekRes.status === 'rejected') {
          setError(true);
        }
      }catch (err) {
        console.error('Failed to fetch weather data:', err);
        setError(true);
      }
      setIsLoading(false);
    }
    _getWeatherData()
  }, [place])

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

export { WeatherProvider };
export default WeatherContext;
