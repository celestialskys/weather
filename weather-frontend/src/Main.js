import React, { useContext  } from 'react';
import { ReactComponent as SplashIcon } from './assets/splash-icon.svg';
import { Box, Container, Grid, Link, SvgIcon, Typography } from '@mui/material';
import TestAPI from './components/tests/test';
import './styles/components/Main.scss';
import CurrentWeather from './components/elements/CurrentWeather';
import Forecast from './components/elements/Forecast';
import { WeatherContext } from './components/context/weather.context';
import ErrorBox from './components/generic-comps/ErrorBox';

function Main(){
    const {weatherData, hourlyForcast, weekForecast, error, isLoading} = useContext(WeatherContext);
    debugger
    // const [isToggled, setIsToggled] = useState(false);
    // const [weatherData, setWeatherData, weatherQuery, setWeatherQuery ] = useState(null);
    // const didMount = useRef(false);

    // useEffect(() => {
    //     const saved = localStorage.getItem('unitToggle');
    //     if (saved !== null) setIsToggled(saved === 'true');
    // }, []);

    // useEffect(() => {
    //     if (!didMount.current) {
    //         didMount.current = true;
    //         return;
    //     }
      
    //     const unit = isToggled ? 'imperial' : 'metric';
    //     localStorage.setItem('unitToggle', isToggled);
    //     weatherOpenApi(weatherQuery).then((data) => {
    //         setWeatherData(data);
    //       })
    //       .catch((err) => {
    //         console.error('Failed to fetch weather data:', err);
    //       });
        
    // }, [isToggled]);

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

    // if (todayWeather && todayForecast && weekForecast) {
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
                title='21 day forecast'
                data={weekForecast}/>
            </Grid>
          </React.Fragment>
        );

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
                {appContent}
            </Grid>
        </Container>
    );
}

export default Main;