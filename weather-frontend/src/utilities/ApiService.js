import axios from 'axios';
import currentWeather from './test/current-weather.json';
import dailyService from './test/daily-service.json';
import hourlyService from './test/hourly-serve.json';
import {BASE_WEATHER_API_URL, BASE_API_URL, RAPID_GEO_API_KEY, GEO_API_URL} from '../config.js'
import AuthStorage from './authStorage.js';
// let token = localStorage.getItem('authToken');
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
    const response = await axios.post(`${BASE_API_URL}/login`, params, {
      withCredentials: true
    });    
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
    const response = await axios.post(`${BASE_API_URL}/users`, params, {
      withCredentials: true
    });    
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function checkLogin() {
  let token = AuthStorage.getToken();

  try  {
    const response = await axios.get(`${BASE_API_URL}/session`, { 
      headers:{
        Authorization: `Bearer ${token}`
    }})
    return response.data;
  } catch (error) {
    console.log(`continuing not logged in`);
    return (error)
  }
}

export async function getUser(params){
  try  {
    const response = await axios.get(`${BASE_API_URL}/users`, params, {withCredentials: true} );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getUserLocations(){
  let token = AuthStorage.getToken();

  try  {
    const response = await axios.get(`${BASE_API_URL}/locations`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function removeUserLocation(params){
  let token = AuthStorage.getToken();
  try  {
    const response = await axios.delete(`${BASE_API_URL}/user_locations/${params.local_id}`,{params}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export const fetchLocationData = async (params) => {
  try {
    const response = await axios.post(`${BASE_WEATHER_API_URL}/location`, params);
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

// export async function fetchCities(input) {
//   try {
//     const response = await fetch(
//       `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
//       GEO_API_OPTIONS
//     );

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//     return;
//   }
// }

export async function fetchCities(query) {
  const response = await fetch(`http://localhost:3000/api/geo/cities?query=${query}`);
  const data = await response.json();
  return data;
};