import React from "react";
import "./App.css";
import DataFetching from "./apiResponseShowOnScreen/DataFetching";
import Apps from "./advancedTopicsContext/apps";
import ErrorBoundaries from "./advancedTopicsContext/ErrorBoundaries";
import ErrorBoundary from "./advancedTopicsContext/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <DataFetching />
      </ErrorBoundary>
      {/* <Apps /> */}
      {/* <ErrorBoundaries /> */}
    </div>
  );
}

export default App;
