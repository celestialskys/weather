import React, { useContext }  from 'react';
import Place from '../weatherElements/Place';
import Search from './Search';
import Settings from './Settings';
import SessionContext from '../context/session.context';
import '../../styles/components/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  const { userData } = useContext(SessionContext);
  let isLoggedIn = Object.keys(userData).length > 0
  let userLink = isLoggedIn ? '/' : '/login'
  return (
    <div className='header'>
        <Place/>
        <Search />
        <Settings/>
        <Link className='profile' to={userLink}><i className="bi bi-person-circle"></i></Link>
        { isLoggedIn && (
          <div>Welcome {userData.firstname}</div>
        )}
        {/* <Profile/> */}
    </div>
  )
}

export default Header