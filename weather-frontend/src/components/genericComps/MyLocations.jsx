import React, { useContext, useEffect } from 'react'
import SessionContext from '../context/session.context';
import HorizontallyScrollable from './HorizontallyScrollable';
import WeatherContext from '../context/weather.context';

function MyLocations() {
    const {savedLocations} = useContext(SessionContext)
    const { setPlace } = useContext(WeatherContext);
    debugger
    const handleClick = (enteredData) => {
        debugger
        setPlace({
            label: enteredData.label,
            lat: enteredData.lat,
            lon: enteredData.lon,
            country: enteredData.country,
            country_code: enteredData.country_code,
            state:enteredData.state
            }
        )
      };

  return (
    <>
      <div className = 'locations'>
            <div className='locations-container'>
                <h3>Your Saved Locations</h3>
                <HorizontallyScrollable className='widget-container'>
                    { savedLocations.map((singleData)=>(
                        <div key={singleData.id}>
                            <button onClick={() => handleClick(singleData)}>{singleData.name}</button>
                        </div>
                    ))}
                </HorizontallyScrollable>
            </div>
        </div>
    </>
  )
}

export default MyLocations