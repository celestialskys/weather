import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

function PrivateRoute({children}: any) {
  const accessToken = false;
  const loading = false;
  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = (location.state as any)?.from
  const previousLocation = location.state ? fromLocation : { pathname: 'login' }
  if (accessToken){
    return children;
  } else if(loading){
    return <p>Loading...</p>
  } else if (!accessToken && !loading){
      navigate("/login");
  } else {
    return <p>Error w route</p>
  }
}

export default PrivateRoute