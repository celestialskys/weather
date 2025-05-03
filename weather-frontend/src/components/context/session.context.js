import { createContext, useEffect, useState } from 'react';
import { checkLogin, removeUserLocation } from '../../utilities/ApiService';
const SessionContext = createContext({
  userData: {},
  accessToken: null,
  authChecked: false,
  savedLocations: {},
  isUserLoading: false,
  userError: false,
  shouldRefreshLocations: false,
  setShouldRefreshLocations: () => {},
  setUserData: () => {},
  setAccessToken: () => {},
  setAuthChecked: () => {},
  setSavedLocations: () => {},
  setIsUserLoading: () => {},
  setUserError: () => {},
});

function SessionProvider({ children }){
    const [userData, setUserData] = useState({});
    const [accessToken, setAccessToken] = useState();
    const [authChecked, setAuthChecked] = useState(false);
    const [savedLocations, setSavedLocations] = useState({});
    const [isUserLoading, setIsUserLoading] = useState(false);
    const [userError, setUserError] = useState(false);
    const [shouldRefreshLocations, setShouldRefreshLocations] = useState(false);
    
    return (
        <SessionContext.Provider
          value={{
            userData,
            accessToken,
            authChecked,
            savedLocations,
            isUserLoading,
            userError,
            setUserData,
            setAccessToken,
            setAuthChecked,
            setSavedLocations,
            setIsUserLoading,
            setUserError,
            shouldRefreshLocations,
            setShouldRefreshLocations,
          }}
        >
          {children}
        </SessionContext.Provider>
      );
}

export { SessionProvider };
export default SessionContext;