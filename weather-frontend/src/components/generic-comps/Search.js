import React, { useContext, useState } from "react";
import WeatherContext from '../context/weather.context';
import { fetchCities } from "../../utilities/ApiService";
import '../../styles/components/Search.scss';
// import AsyncSelect from 'react-select/async';
import { AsyncPaginate } from 'react-select-async-paginate';


function Search(){
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
      setPlace({
        label: enteredData.label,
        lat: enteredData.lat,
        lon: enteredData.lon,
        country: enteredData.country,
        state:enteredData.state
        }
      )
    };

    const customStyles = {
      control: (provided, state) => ({
          ...provided,
          borderRadius: '5px',
          border: '2px solid #ccc',
          boxShadow: state.isFocused ? '0 0 0 2px #1c0c69' : null,
          color: state.isFocused ? "black": "grey"
      }),
      option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? '#3699FF' : null,
          color: state.isFocused ? "black": "#1c0c69"
      }),
  }
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
                onChange={onChangeHandler}
                styles = {customStyles}
              />
            </div>
          </div>
        </>
    );
    
};

export default Search;