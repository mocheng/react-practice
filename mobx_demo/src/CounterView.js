import React from 'react';

const CounterView = ({count, caption="Count", onIncrement, onDecrement}) => (
  <div>
    <h1>{caption}: {count}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

export default CounterView;

