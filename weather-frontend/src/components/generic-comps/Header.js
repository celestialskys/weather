import React from 'react'
import Place from '../elements/Place';
import Search from './Search';
import Settings from './Settings';
import '../../styles/components/Header.scss';

function Header() {
  
  const handleOnSearchChange= (searchData) =>{
    console.log(searchData)
  }

  return (
    <div className='header'>Header
        <Place/>
        <Search />
        {/* onSearchChange={handleOnSearchChange}/> */}
        <Settings/>
    </div>
  )
}

export default Header