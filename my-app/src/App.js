import React, { useEffect } from 'react';
import './App.css';
import {fetchAllData} from './services/fetchData'
import Image from './components/Image'

function App() {

  useEffect(() => {fetchAllData()}, [])

  
  return (
    <div className="App">
      
      <Image/>
    </div>
  );
}

export default App;
