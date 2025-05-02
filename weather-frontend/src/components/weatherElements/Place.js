import React, { useContext }  from 'react';
import WeatherContext from '../context/weather.context';

function Place() {
  const {place} = useContext(WeatherContext)

  if (!place?.label) {
    debugger
    return <div>Loading location...</div>;
  }
  debugger
  return (
    <div className="place">
        <i className="bi bi-geo-alt-fill"></i> <b> {place.label}</b>
        { place.country_code && (
           <>, {place.country_code}</>
        )
        }
    </div>
    )
}

export default Place