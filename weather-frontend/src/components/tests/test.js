import React from 'react';
import { WeatherOpenApi } from '../../utilities/ApiService';

const TestAPI = () => {
  const handleTest = async () => {
    try {
      const data = await WeatherOpenApi({ path:"weather", params: { "lon": "44.34", "lat":"44.34"} });
      console.log("API response:", data);
    } catch (err) {
      console.error("API test failed:", err);
    }
  };

  return (
    <div>
      <button onClick={handleTest}>Test Location API</button>
    </div>
  );
};

export default TestAPI;
