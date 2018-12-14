import React from 'react';
import CounterView from './CounterView';

import {observable, decorate} from 'mobx';
import {observer} from 'mobx-react';

/*
 * Below is same as 
 *  ```
 *  const store = observable({
 *    count: 0
 *  });
 *  ```
 */
const store = {
  count: 0
}
decorate(store, {
  count: observable
});

store.increment = function() {
  this.count ++;
};
store.decrement = function() {
  this.count --;
}

@observer // this decorator is must
class Counter extends React.Component {
  onIncrement = () => {
    store.increment();
  }

  onDecrement = () => {
    store.decrement();
  }

  render() {
    return(
      <CounterView
        caption="With decorate call"
        count={this.count}
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
        />
    );
  }
}

export default Counter;

