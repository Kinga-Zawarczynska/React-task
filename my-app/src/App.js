import React from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchAll} from './services/fetchData'

function App() {
  return (
    <div className="App" onClick={()=> fetchAll()}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello there, i'm Kinga
        </a>
      </header>
    </div>
  );
}

export default App;
