import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';

const Content = () => (
  <main>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
  </main>
)

export default Content;

