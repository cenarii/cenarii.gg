import React from 'react';
import './App.css';
import matthew from "./images/matthewClassic.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={matthew} className="App-logo" />
        <a
          className="Yee"
          href="https://www.youtube.com/watch?v=q6EoRBvdVPQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yee
        </a>
      </header>
    </div>
  );
}

export default App;
