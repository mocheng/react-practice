import React, { Component } from 'react';
import './App.css';

import DevTools from 'mobx-react-devtools';

import './playground';

import Counter from './Counter';
import CounterDecorator from './CounterDecorator';
//import CounterStrict from './CounterStrict';
import CounterStore from './CounterStore';

import ModeSwitch from './ModeSwitch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModeSwitch />
        <DevTools />
        <Counter />
        <CounterDecorator />
        <CounterStore/>
      </div>
    );
  }
}

export default App;
