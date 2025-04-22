import React  from 'react';
import '../../../styles/components/Search.scss';

function Search() {
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