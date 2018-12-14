import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import ThemeContext from './ThemeContext';
import Counter from './Counter';
import CounterReducer from './CounterReducer';

class App extends Component {
  render() {
    return (
      //<ThemeContext.Provider>
      <ThemeContext.Provider value="bar">
        <div className="App">
          <Counter />
          <CounterReducer />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
