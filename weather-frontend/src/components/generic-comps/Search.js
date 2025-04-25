import React, { useContext, useState } from "react";
import {WeatherContext} from '../context/weather.context';
import { fetchCities } from "../../utilities/ApiService";
import '../../styles/components/Search.scss';
// import AsyncSelect from 'react-select/async';
import { AsyncPaginate } from 'react-select-async-paginate';


function Search(){
    const { getWeatherData } = useContext(WeatherContext);
    const { setPlace } = useContext(WeatherContext);
    const {place} = useState([]);
    
    const loadOptions = async (inputValue) => {
      let citiesList = [place]
      if (inputValue){
        citiesList = await fetchCities(inputValue);
      }

      return {
        options: citiesList.data.map((city) => {
          return {
            label: city.name,
            lat: city.latitude,
            lon: city.longitude,
            country: city.country,
            region: city.region
          };
        }),
      };
    };
    
    const onChangeHandler = (enteredData) => {
      debugger
      getWeatherData(enteredData.lat, enteredData.lon);
      setPlace({
        label: enteredData.label,
        lat: enteredData.lat,
        lon: enteredData.lon,
        country: enteredData.country,
        state:enteredData.state
        }
      )
    };

    return (
        <>
          <div className='search-container'>
            <div className='search-icon'>
              <i className='bi bi-search'></i>
            </div>
            <div className='search-input'>
              <AsyncPaginate
                placeholder="Search for city"
                debounceTimeout={600}
                value={place}
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                // onChange={onChangeHandler}
              />
            </div>
          </div>
        </>
    );
    
};

export default Search;