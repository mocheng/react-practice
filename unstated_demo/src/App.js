import React, { Component } from 'react';
import './App.css';

import {Provider} from 'unstated';
import Counter from './Counter';

import CounterContainer from './CounterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        <Provider inject={[new CounterContainer(123)]}>
        */}
        <Provider>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default App;
