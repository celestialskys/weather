import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function PersistLogin() {
  const loading = false;
  const accessToken = false;
  const refreshToken = null;

  useEffect(() => {
    function verifyRefreshToken(){
      try{
        // dispatch(refreshAccessToken)
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