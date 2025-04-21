import React from 'react'
import Place from '../Place';
import Search from './Search';
import '../../../styles/Header.scss';

function Header() {
  return (
    <div className='header'>Header
        <Search/>
        <Place/>
    </div>
  )
}

export default Header