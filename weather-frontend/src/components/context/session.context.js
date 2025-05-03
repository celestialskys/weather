import { createContext, useEffect, useState } from 'react';
import { checkLogin, getUserLocations } from '../../utilities/ApiService';
const SessionContext = createContext({
  userData: {},
  accessToken: {},
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

    useEffect(()=>{
        const _getUserLocations = async () =>{
          try {
            const savedUserLocations = await getUserLocations({user_id: userData.id})
            debugger
            if (savedUserLocations){
              setSavedLocations(savedUserLocations)
            }
          }catch (error) {
            console.error('there was a prob gettin locations')
          }
        }
        debugger
        if (Object.keys(accessToken)!==0 && Object.keys(userData).length !==0){
          _getUserLocations();
        }
    }, [userData])


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