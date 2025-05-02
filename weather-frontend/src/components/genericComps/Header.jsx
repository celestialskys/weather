import React, { useContext }  from 'react';
import Place from '../weatherElements/Place';
import Search from './Search';
import Settings from './Settings';
import SessionContext from '../context/session.context';
import '../../styles/components/Header.scss';

function Header() {
  const { accessToken, userData } = useContext(SessionContext);

  return (
    <div className='header'>
        <Place/>
        <Search />
        <Settings/>
        {/* <Link to="/about">About</Link> */}
        <i className="bi bi-person-circle"></i>
        { accessToken && (
          <div>Welcome {userData.firstname}</div>
        )}
        {/* <Profile/> */}
    </div>
  )
}

export default Header