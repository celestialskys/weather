import React, { useEffect, useState } from "react";
// import { WeatherContext } from '../context/weather.context';
import { fetchCities } from "../../utilities/ApiService";
import '../../styles/components/Search.scss';

function Search(){
    // const { setPlace } = useContext(WeatherContext);
    const [searchText, setText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // const [openSearchResults, setOpenSearchResults] = useState(false);

    useEffect(()=>{
        const delayDebounceFn = setTimeout(() => {
            let data = fetchCities(searchText);
            setSearchResults = data;
        }, 3000)
        return () => clearTimeout(delayDebounceFn)
    }, [searchText])

    async function onSearch(e) {
        setText(e.target.value);        // setSearchResults(data);
        // setOpenSearchResults(data.length);
    }

    const changePlace = (place) => {
        // setPlace(place);
        setText('');
        // setOpenSearchResults(false);
    };

    return (
        <>
          <div className='search-container'>
            <div className='search-icon'>
              <i className='bi bi-search'></i>
            </div>
            <div className='search-input'>
              <input
                type='text'
                name='search-city'
                placeholder='Search city ...'
                value={searchText}
                onChange={onSearch}
              />
            </div>
            {/* {openSearchResults && ( */}
              <div className='search-results'>
                <div className='results-container'>
                  {searchResults.map((place) => (
                    <div
                      className='result'
                      key={place.id}
                    //   onClick={() => changePlace(place)}
                    >
                      {place.name}, {place.region}, {place.country}
                    </div>
                  ))}
                </div>
              </div>
            {/* )} */}
          </div>
        </>
    );
    
};

export default Search;