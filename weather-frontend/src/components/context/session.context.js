import { createContext, useEffect, useState } from 'react';

const SessionContext = createContext({
  userData: {},
  accessToken: {},
  savedLocations: {},
  isUserLoading: false,
  userError: false,
  setUserData: () => {},
  setAccessToken: () => {},
  setSavedLocations: () => {},
  setIsUserLoading: () => {},
  setUserError: () => {},
});

function SessionProvider({ children }){
    const [userData, setUserData] = useState({});
    const [accessToken, setAccessToken] = useState({});
    const [savedLocations, setSavedLocations] = useState({});
    const [isUserLoading, setIsUserLoading] = useState(false);
    const [userError, setUserError] = useState(false);

    return (
        <SessionContext.Provider
          value={{
            userData,
            accessToken,
            savedLocations,
            isUserLoading,
            userError,
            setUserData,
            setAccessToken,
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