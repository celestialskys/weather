import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { SessionProvider } from '../../context/session.context';
import {checkLogin} from '../../../utilities/ApiService';

function PersistLogin() {
  const {loading, accessToken, setAccessToken, setUserData, authChecked, setAuthChecked } = useContext(SessionProvider)

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const loginRes = await checkLogin();
        if (loginRes.authenticated) 
          {
            setUserData(loginRes.user)
            setAccessToken(loginRes.accessToken)
            setAuthChecked(true)
          }
      } catch (err){
        setUserData(null);
        console.log('Err refreshing access token')
      } finally {
        setAuthChecked(true)
      }
    }
    if (!accessToken && !authChecked){
      verifyRefreshToken();
    }
  }, [authChecked])

  return (
    <>
    {loading ? <p>Loading..</p> : <Outlet/>}
    </>
  )
}

export default PersistLogin