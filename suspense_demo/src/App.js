import React, { Component } from 'react';
import './App.css';

import SuspenseDemo from './SuspenseDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SuspenseDemo />
      </div>
    );
  }
}

export default App;
