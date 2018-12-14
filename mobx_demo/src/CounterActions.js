import React from 'react';
import CounterView from './CounterView';

import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class Counter extends React.Component {
  @observable count = 0;

  @action
  increment = () => {
    this.count ++;
  }

  @action
  decrement = () => {
    this.count --;
  }

  render() {
    return(
      <CounterView
        caption="With strict mode"
        count={this.count}
        onIncrement={this.increment}
        onDecrement={this.decrement}
        />
    );
  }
}

export default Counter;

