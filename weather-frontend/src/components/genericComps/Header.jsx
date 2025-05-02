import React, { useContext }  from 'react';
import Place from '../weatherElements/Place';
import Search from './Search';
import Settings from './Settings';
import SessionContext from '../context/session.context';
import '../../styles/components/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  const { accessToken, userData } = useContext(SessionContext);

  let isLoggedIn = Object.keys(accessToken).length !== 0
  let userLink = isLoggedIn ? '/' : '/login'

  return (
    <div className='header'>
        <Place/>
        <Search />
        <Settings/>
        <Link to={userLink}><i className="bi bi-person-circle"></i></Link>
        { Object.keys(accessToken).length !== 0 && (
          <div>Welcome {userData.firstname}</div>
        )}
        {/* <Profile/> */}
    </div>
  )
}

export default Header