import React from 'react'
import Place from '../weatherElements/Place';
import Search from './Search';
import Settings from './Settings';

import '../../styles/components/Header.scss';

function Header() {
  return (
    <div className='header'>Header
        <Place/>
        <Search />
        {/* onSearchChange={handleOnSearchChange}/> */}
        <Settings/>
        {/* <Profile/> */}
    </div>
  )
}

export default Header