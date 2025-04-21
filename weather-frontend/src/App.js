import React, { Component }  from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import axios from "axios";
import { useEffect, useState } from "react";
import Header from './components/elements/generic-comps/Header';
import Main from './Main';
import 'bootstrap-icons/font/bootstrap-icons.css';
 
function App() {
  const dark = false;
  
  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
