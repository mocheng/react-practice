import React from 'react';
import {Subscribe} from 'unstated';
import CounterContainer from './CounterContainer';

const Counter = () => {
  return (
    //<Subscribe to={[ new CounterContainer(23)]}>
    <Subscribe to={[CounterContainer]}>
      {
        counter => (
          <div>
            <span>{counter.state.count}</span>
            <button onClick={counter.decrement}>-</button>
            <button onClick={counter.increment}>+</button>
          </div>
        )
      }
    </Subscribe>
  );
};

export default Counter;
