import React from 'react';

import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';

const CounterView = ({count, onIncrement}) => {
  return (
    <div>
      <div>{count}</div>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return state;
  }
}

const store = createStore(reducer, {count: 0});

const store2 = createStore(reducer, {count: 100});


const mapStateToProps = (state) => {
  console.log('# enter mapStateToProps');
  return {
    count: state.count
  };
}

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({type: 'INCREMENT'})
});

const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterView);

const burstIncrement = () => {
  store.dispatch({type: 'INCREMENT'});
  store.dispatch({type: 'INCREMENT'});
  store.dispatch({type: 'INCREMENT'});
};

const delayBurstIncrement = () => {
  setTimeout(burstIncrement, 0);
};

const CounterDemo = () => (
  <Provider store={store}>
    <React.Fragment>
      <Provider store={store2} >
        <React.Fragment>
          <button onClick={burstIncrement}>burst</button>
          <button onClick={delayBurstIncrement}>delay burst</button>
          <Counter />
        </React.Fragment>
      </Provider>
   </React.Fragment>
  </Provider>
);

export default CounterDemo;
