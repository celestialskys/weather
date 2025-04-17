import logo from './logo.svg';
import './App.css';
import axios from "axios";
import './main';
import { useEffect, useState } from "react";
import Main from './main';

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
