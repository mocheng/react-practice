import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'inc': return state + 1;
    case 'dec': return state + 1;
  }
  return state;
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({type: 'inc'})}>+</button>
      <button onClick={() => dispatch({type: 'dec'})}>-</button>
    </div>
  );
};

export default Counter;
