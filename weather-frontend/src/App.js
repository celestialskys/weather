import logo from './logo.svg';
import './App.css';
import axios from "axios";
import './main';
import { useEffect, useState } from "react";
import Main from './main';

const API_URL="http://localhost:3000";

function getAPIData(){
  return axios.get(API_URL).then((response)=> response.data);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Weather</h1>
       <Main/>
      </header>
    </div>
  );
}

export default App;
