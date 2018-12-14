import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {unstable_trace as trace} from 'scheduler/tracing';

//ReactDOM.render(<App />, document.getElementById('root'));
trace('initial render', performance.now(), () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

registerServiceWorker();
