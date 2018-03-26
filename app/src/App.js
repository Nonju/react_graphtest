import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import D3 from './D3/';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1 className="App-intro">
          Implementations:
        </h1>

        <D3 />
        
      </div>
    );
  }
}

export default App;
