import React from 'react';
import logo from './logo.svg';
import './App.css';


function App(props) {
  return (
    <div className="main-container">
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Music db</h2>
      </div>
    </div>
    <div>
      { props.children }
    </div>
    </div>
  );
}

export default App;
