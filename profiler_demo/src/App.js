import React, { Component } from 'react';
import './App.css';

import StopWatch from './StopWatch';

//const Profiler = React.unstable_Profiler;

class App extends Component {
  render() {
    return (
      //<Profiler id="root" onRender={f=>f}>
        <div className="App">
          <StopWatch />
        </div>
        //</Profiler>
    );
  }
}

export default App;
