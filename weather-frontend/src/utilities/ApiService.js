import axios from 'axios';

const GEO_API_URL = 'https://api.geoapify.com/v1/geocode/autocomplete';
const BASE_API_URL = 'http://localhost:3000/api/weather';
const GEO_API_Key = process.env.REACT_APP_LOCATION_API_KEY;

// # WeatherStack::Services::FetchWeather.new().perform({ path:"weather", params: { "lon": "44.34", "lat":"44.34"} })
export const weatherOpenApi = async (params) => {
    // let params = new URLSearchParams(data).toString();
      
  debugger
    try {
        const response = await axios.get(BASE_API_URL, { params });
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
