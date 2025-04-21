import React  from 'react';
import '../../../styles/Search.scss';

function Search() {
  return (
    <>
        <div className="search" >Search</div>
            <div className="search-icon">
                <i class="bi bi-search"></i>
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