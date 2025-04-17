const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
import axios from 'axios';
const BASE_API_URL = 'http://localhost:3000/api';

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