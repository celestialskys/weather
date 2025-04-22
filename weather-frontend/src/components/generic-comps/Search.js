import React, { useContext, useState }  from 'react';
import '../../styles/components/Search.scss';

function Search() {
  // const { setPlace } = useContext(WeatherContext)
  const [text, setText] = useState('')
  const [searchResults, setSearchResults] = useState([])
  
  async function onSearch(e){
    setText(e.target.value)
    // const data = await searchPlaces(e.target.value)
    // setSearchResults(data)
  }
  
  return (
    <>
        <div className="search" >Search</div>
            <div className="search-icon">
                <i className="bi bi-search"></i>
            </div>
            <div className="search-input">
                <input type = "text"
                name = "search-city"
                placeholder="Search city..."
                />
            </div>
    </>
  )
}

export default Search