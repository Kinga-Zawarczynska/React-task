import React from 'react';
import './App.css';
import Article from './components/Article';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <Article/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
