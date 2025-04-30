import React, { useContext }  from 'react';
import logo from './logo.svg';
import './styles/components/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import Header from './components/generic-comps/Header';
import Main from './Main';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ThemeContext from './components/context/theme.context';
import { WeatherProvider } from './components/context/weather.context';
import PrivateRoute from './components/generic-comps/routes/PrivateRoute';
import PersistLogin from './components/generic-comps/sessions/PersistLogin';
import Dashboard from './components/generic-comps/Dashboard';

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Material Design for Bootstrap</title>
      <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
      />
      <link rel="stylesheet" href="css/mdb.min.css" />
    </div>
    <Router>
      <WeatherProvider>
        <Header/>
        <Routes>
          <Route element = {<PersistLogin/>}>
            <Route path="/" element = {
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            }/>

          </Route>
        </Routes>
        <Main/>
      </WeatherProvider>
    </Router>
    </div>
  );
}

export default App;
