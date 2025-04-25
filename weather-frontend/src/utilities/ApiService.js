import axios from 'axios';
import currentWeather from './test/current-weather.json';
import dailyService from './test/daily-service.json';
import hourlyService from './test/hourly-serve.json';

const BASE_API_URL = 'http://localhost:3000/api/weather';
export const RAPID_GEO_API_KEY=process.env.REACT_APP_RAPID_GEO_API_KEY;
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// # WeatherStack::Services::FetchWeather.new().perform({ path:"weather", params: { "lon": "44.34", "lat":"44.34"} })
export const weatherOpenApi = (params)=> {
  let my_path = params?.path
  if (!my_path) {my_path = 'weather' }
  switch (my_path || {}) {
    case 'weather':  
      return currentWeather;

      // Statements executed when expression === value2
      break;
    case 'forecast/hourly':
      return hourlyService;
      // Statements executed when expression === value1
      break;
    case 'forecast/daily':
      return dailyService;
      break;
    default:
      return currentWeather;

      // Statements executed when no case matches
  }
}

export const WeatherOpenApi = async (params) => {
  try {
      const response = await axios.post(BASE_API_URL, { params });
      return response.data;
  } catch (error) {
      console.error("Error fetching weather:", error);
      throw error;
  }
};

export const fetchLocationData = async (params) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/location`, { params });
    return response.data;
} catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
};

const GEO_API_OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": `${RAPID_GEO_API_KEY}`,
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

export async function fetchCities(input) {
  try {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
      GEO_API_OPTIONS
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
}