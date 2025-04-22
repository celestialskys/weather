import axios from 'axios';
import currentWeather from './test/current-weather.json';
import dailyService from './test/daily-service.json';
import hourlyService from './test/hourly-serve.json';

const GEO_API_URL = 'https://api.geoapify.com/v1/geocode/autocomplete';
const BASE_API_URL = 'http://localhost:3000/api/weather';
const GEO_API_Key = process.env.REACT_APP_LOCATION_API_KEY;

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
// export const weatherOpenApi = async (params) => {
//     try {
//       return ( currentWeather)
//         const response = await axios.get(BASE_API_URL, { params });
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching weather:", error);
//         throw error;
//     }

// };

export const fetchLocationData = async (params) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/location`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
};


// export const fetchExternalLocationData = async (text) => {
//   const data = {
//     apiKey: GEO_API_Key,
//     format: 'json',
//     text: text
//   }
//   let params = new URLSearchParams(data).toString();
  
//   try {
//     const response = await axios.post(`${GEO_API_URL}?${params}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching api location:", error);
//     throw error;
//   }
// // };
// import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';

// const autocomplete = new GeocoderAutocomplete(
//                         document.getElementById("autocomplete"), 
//                         'YOUR_API_KEY', 
//                         { /* Geocoder options */ });

// autocomplete.on('select', (location) => {
//     // check selected location here 
// });

// autocomplete.on('suggestions', (suggestions) => {
//     // process suggestions here
// });
