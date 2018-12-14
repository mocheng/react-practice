import React, { Component } from 'react';
import './App.css';

import RandomJoke from './RandomJoke';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RandomJoke />
      </div>
    );
  }
}

export default App;
