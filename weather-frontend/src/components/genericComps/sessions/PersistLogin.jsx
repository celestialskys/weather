import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { SessionProvider } from '../../context/session.context';
import {checkLogin} from '../../../utilities/ApiService';

function PersistLogin() {
  const {loading, accessToken, refreshToken} = useContext(SessionProvider)

  useEffect(() => {
    function verifyRefreshToken(){
      try{
        checkLogin();
      } catch (err){
        console.log('Err refreshing access token')
      }
    }
    if (!accessToken){
      verifyRefreshToken();
    }
  }, [accessToken, refreshToken])

  return (
    <>
    {loading ? <p>Loading..</p> : <Outlet/>}
    </>
  )
}

export default PersistLogin