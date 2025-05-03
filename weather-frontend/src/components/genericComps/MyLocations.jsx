import React, { useContext, useEffect } from 'react'
import SessionContext from '../context/session.context';
import HorizontallyScrollable from './HorizontallyScrollable';
import WeatherContext from '../context/weather.context';
import '../../styles/components/MyLocations.scss';
import {removeUserLocation} from '../../utilities/ApiService';

function MyLocations() {
    const {savedLocations, setSavedLocations, userData} = useContext(SessionContext)
    const { setPlace } = useContext(WeatherContext);
    const handleClick = (enteredData) => {
        setPlace({
            label: enteredData.name,
            lat: enteredData.lat,
            lon: enteredData.lon,
            country: enteredData.country,
            country_code: enteredData.country_code,
            state:enteredData.state
            }
        )
    };
    

    const removeLocation = async (localId) => {
        let updatedLocations = [savedLocations]
        updatedLocations = await removeUserLocation({local_id: localId, user_id: userData.id});
        if (updatedLocations.destroyed){
            setSavedLocations(updatedLocations.locations)
        }
    }

  return (
    <div className = 'locations'>
        <h3>Your Saved Locations</h3>
        <div className='locations-list'>
            { savedLocations.map((singleData)=>(
                <div
                className="location-item"
                key={singleData.id}
                onClick={() => handleClick(singleData)}
                >
                <span className="location-name">{singleData.name}</span>
                <button
                    className="remove"
                    onClick={(e) => {
                    e.stopPropagation(); // prevent click bubbling to parent
                    removeLocation(singleData.id);
                    }}
                >
                    ✖
                </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyLocations