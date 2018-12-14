import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProviderDemo from './ProviderDemo';
import ContextDemo from './ContextDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProviderDemo />
        <ContextDemo />
      </div>
    );
  }
}

export default App;
