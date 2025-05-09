import React, { useContext  } from 'react';
import { ReactComponent as SplashIcon } from './assets/splash-icon.svg';
import { Box, Container, Grid, Link, SvgIcon, Typography } from '@mui/material';
import TestAPI from './components/tests/test';
import './styles/components/Main.scss';
import CurrentWeather from './components/weatherElements/CurrentWeather';
import Forecast from './components/weatherElements/Forecast';
import WeatherContext from './components/context/weather.context';
import SessionContext from './components/context/session.context';
import ErrorBox from './components/genericComps/ErrorBox';
import MyLocations from './components/genericComps/MyLocations';

function Main(){
    const {weatherData, hourlyForcast, weekForecast, error, isLoading} = useContext(WeatherContext)
    const {userContext, savedLocations} = useContext(SessionContext);

    let appContent = (
        <Box
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                width: '100%',
                minHeight: '500px',
            }}
        >
            <SvgIcon
                component={SplashIcon}
                inheritViewBox
            />
            <Typography
                variant="h4"
                component="h4"
            >
               Explore the Weather

            </Typography>
        </Box>
    );
    
    if (!!weatherData && Object.keys(weatherData).length != 0 && !!hourlyForcast && Object.keys(hourlyForcast).length != 0 && Object.keys(hourlyForcast).length != 0 && !!weekForecast && Object.keys(weekForecast).length != 0) {
        appContent = (
          <React.Fragment>
            {/* <Grid item xs={12} md={todayWeather ? 6 : 12}> */}
            <Grid>
              <Grid>
                <CurrentWeather weatherData = {weatherData} />
              </Grid>
            </Grid>
            <Grid>
              <Forecast 
                type='hourly'
                title='hourly forecast'
                data={hourlyForcast}/>
              <Forecast
                type='daily'
                title='daily forecast'
                data={weekForecast}/>
            </Grid>
          </React.Fragment>
        );
    }
    // appContent=                 <TestAPI></TestAPI>

    if (error) {
        appContent = (
            <ErrorBox
            margin="3rem auto"
            flex="inherit"
            errorMessage="Something went wrong"
            />
        );
    }

    return (
        <Container>
            <Grid container columnSpacing={2}>
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                        width: '100%',
                        marginBottom: '1rem',
                        }}
                    ></Box>
                    <div id="autocomplete" className="autocomplete-container"></div>
                </Grid>
                {savedLocations.length > 0 && (
                    <MyLocations/>
                )}
                {appContent}
            </Grid>
        </Container>
    );
}

export default Main;