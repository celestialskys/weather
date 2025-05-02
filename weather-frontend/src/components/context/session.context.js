import { createContext, useEffect, useState } from 'react';
const WeatherContext = createContext();
import { login } from '../../utilities/ApiService';

function SessionProvider({ children }){
    const [userData, setUserData] = useState({});
    const [sessionData, setSessionData] = useState({});
    const [savedLocations, setSavedLocations] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    return (
        <SessionProvider.Provider
          value={{
            userData,
            sessionData,
            savedLocations,
            isLoading,
            error
          }}
        >
          {children}
        </SessionProvider.Provider>
      );
}