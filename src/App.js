import React from 'react'
import './App.css';
import DataFetching from './apiResponseShowOnScreen/DataFetching';
import Apps from './advancedTopicsContext/apps';
import ErrorBoundaries from './advancedTopicsContext/ErrorBoundaries'

function App() {
  return (
    <div className="App">
      <DataFetching />
      {/* <Apps /> */}
      {/* <ErrorBoundaries /> */}
    </div>
  );
}

export default App;
