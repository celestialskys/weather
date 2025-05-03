import axios from 'axios';
import currentWeather from './test/current-weather.json';
import dailyService from './test/daily-service.json';
import hourlyService from './test/hourly-serve.json';
import {setUserData, setAccessToken} from '../components/context/session.context'
const BASE_WEATHER_API_URL = 'https://localhost:3000/api/weather';
const BASE_API_URL = 'https://localhost:3000/api';
export const RAPID_GEO_API_KEY=process.env.REACT_APP_RAPID_GEO_API_KEY;
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// # WeatherStack::Services::FetchWeather.new().perform({ path:"weather", params: { "lon": "44.34", "lat":"44.34"} })
export const testingWeatherOpenApi = (params)=> {
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
      const response = await axios.get(BASE_WEATHER_API_URL, { params });
      return response.data;
  } catch (error) {
      console.error("Error fetching weather:", error);
      throw error;
  }
};

export async function loginUser(params){
  try  {
    const response = await axios.post(`${BASE_API_URL}/login`, { ...params, ...{withCredentials: true} } );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function logoutUser(){
  try  {
    const response = await axios.destroy(`${BASE_API_URL}/logout`, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(params){
  try  {
    const response = await axios.post(`${BASE_API_URL}/users`, { ...params, ...{withCredentials: true} });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function checkLogin() {
  try  {
    const response = await axios.get(`${BASE_API_URL}/session`,  { withCredentials: true });
    return response.data;
  } catch (error) {
    console.log(`continuing not logged in`);
    return (error)
  }
}

export async function getUser(params){
  try  {
    const response = await axios.get(`${BASE_API_URL}/users`, { ...params, ...{withCredentials: true} });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getUserLocations(params){
  try  {
    const response = await axios.get(`${BASE_API_URL}/locations`, { ...params, ...{withCredentials: true} });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const fetchLocationData = async (params) => {
  try {
    const response = await axios.post(`${BASE_WEATHER_API_URL}/location`, { ...params, ...{withCredentials: true} });
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