import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RenderAll from './RenderAll';
import Login from './Login';
import Auth from './Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RenderAll>
          {() => <h1>hello world</h1>}
        </RenderAll>
        <Login>
          { ({userName}) => <h1>Hello {userName}</h1> }
        </Login>
        <Auth
          login={({userName}) => <h1>Hello {userName}</h1>}
          nologin={() => <h1>Please login</h1>}
        />
      </div>
    );
  }
}

export default App;
