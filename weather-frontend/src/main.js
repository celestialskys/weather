import React from "react";
import { ReactComponent as SplashIcon } from './assets/splash-icon.svg';
import { Box, Container, Grid, Link, SvgIcon, Typography } from '@mui/material';

function Main(props){
    
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
                sx={{ fontSize: { xs: '100px', sm: '120px', md: '140px' } }}
            />
            <Typography
                variant="h4"
                component="h4"
                sx={{
                    fontSize: { xs: '12px', sm: '14px' },
                    color: 'rgba(255,255,255, .85)',
                    fontFamily: 'Poppins',
                    textAlign: 'center',
                    margin: '2rem 0',
                    maxWidth: '80%',
                    lineHeight: '22px',
                }}
            >
               Explore the Weather

            </Typography>
        </Box>
    );

    return (
        <Container
            sx={
                {
                    maxWidth: { xs: '95%', sm: '80%', md: '1100px' },
                    width: '100%',
                    height: '100%',
                    margin: '0 auto',
                    padding: '1rem 0 3rem',
                    marginBottom: '1rem',
                    borderRadius: {
                    xs: 'none',
                    sm: '0 0 1rem 1rem',
                },
                boxShadow: {
                    xs: 'none',
                    sm: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
                },
            }}
        >
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
                </Grid>
                {appContent}
            </Grid>
        </Container>
    );
}

export default Main;