import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import SessionContext from '../../context/session.context';
import {checkLogin} from '../../../utilities/ApiService';

function PersistLogin() {
  const {loading, accessToken, setAccessToken, userData, setUserData, authChecked, setAuthChecked, setShouldRefreshLocations } = useContext(SessionContext);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const loginRes = await checkLogin();
        if (loginRes.authenticated){
          setUserData(loginRes.user)
          setAccessToken(loginRes.accessToken)
        }

      } catch(err) {
        setUserData(null);
        console.log('Err refreshing access token')
      } finally {
        setAuthChecked(true)
      }
    }
    setTimeout(() => {    
      if (!accessToken && !authChecked){verifyRefreshToken()}
    }, 100)
  }, [accessToken, authChecked] )

  //   const verifyRefreshToken = async () => {
  //     try {
  //       const loginRes = await checkLogin();
  //       if (loginRes.authenticated) 
  //         {
  //           setUserData(loginRes.user)
  //           setAccessToken(loginRes.accessToken)
  //           setAuthChecked(true)
  //         }
  //     } catch (err){
  //       setUserData(null);
  //       console.log('Err refreshing access token')
  //     } finally {
  //       setAuthChecked(true)
  //       debugger
  //       if (accessToken?.session_id && userData?.id && authChecked) {
  //         setShouldRefreshLocations(true);
  //       }
  //     }
  //   }
  //   debugger
  //   if (!accessToken && !authChecked){
  //     debugger
  //     verifyRefreshToken();
  //   }
  // }, [authChecked])

  return (
    <>
    {loading ? <p>Loading..</p> : <Outlet/>}
    </>
  )
}

export default PersistLogin