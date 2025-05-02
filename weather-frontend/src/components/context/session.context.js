import { createContext, useEffect, useState } from 'react';
import { checkLogin } from '../../utilities/ApiService';
const SessionContext = createContext({
  userData: {},
  accessToken: checkLogin(),
  authChecked: {},
  savedLocations: {},
  isUserLoading: false,
  userError: false,
  setUserData: () => {},
  setAccessToken: () => {},
  setAuthChecked: () => {},
  setSavedLocations: () => {},
  setIsUserLoading: () => {},
  setUserError: () => {},
});

function SessionProvider({ children }){
    const [userData, setUserData] = useState({});
    const [accessToken, setAccessToken] = useState({});
    const [authChecked, setAuthChecked] = useState({});
    const [savedLocations, setSavedLocations] = useState({});
    const [isUserLoading, setIsUserLoading] = useState(false);
    const [userError, setUserError] = useState(false);

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
            setUserError
          }}
        >
          {children}
        </SessionContext.Provider>
      );
}

export { SessionProvider };
export default SessionContext;