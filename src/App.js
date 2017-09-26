import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RestoAPI from './api.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>RESTO API</h2>
        </div>
        <div>
          <RestoAPI restaurant = "food"></RestoAPI>
        </div>
      </div>
    );
  }
}

export default App;
