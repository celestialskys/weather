import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import SessionContext from '../../context/session.context';
import {checkLogin, getUserLocations} from '../../../utilities/ApiService';
import AuthStorage from '../../../utilities/authStorage';
function PersistLogin() {
  const {loading, accessToken, setAccessToken, userData, setUserData, authChecked, setAuthChecked, setShouldRefreshLocations, shouldRefreshLocations, setSavedLocations, } = useContext(SessionContext);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const loginRes = await checkLogin();
        if (loginRes.authenticated) {
          AuthStorage.setSession({
            token: loginRes.session_token,
            user: loginRes.user
          });
          setUserData(loginRes.user);
          setAccessToken(loginRes.accessToken);
          setShouldRefreshLocations(true);
          // localStorage.setItem('authToken', loginRes.accessToken);
          // localStorage.setItem('user', JSON.stringify(loginRes.user));
        } else {
          setUserData({});
        }
      } catch (err) {
        setUserData({});
        console.log('Err refreshing access token');
      } finally {
        setAuthChecked(true);
        console.log('TOKEN:', localStorage.getItem('authToken'));
        console.log('USER:', JSON.parse(localStorage.getItem('user')));
      }
    };
    if(!authChecked){
      verifyRefreshToken();
    }
    
  }, []);

  useEffect(() => {
      const _getUserLocations = async () => {
        try {
          const savedUserLocations = await getUserLocations({ user_id: userData.id });
          if (savedUserLocations) {
            setSavedLocations(savedUserLocations);
          }
        } catch (error) {
          console.error('Error fetching user locations:', error);
        } finally {
          setShouldRefreshLocations(false);
        }
      };
      if (
        userData?.id &&
        shouldRefreshLocations
      ) {
        setTimeout(() => {
        _getUserLocations();}, 100)
      }
    }, [userData]);
    
  

  return (
    <>
    {loading ? <p>Loading..</p> : <Outlet/>}
    </>
  )
}

export default PersistLogin