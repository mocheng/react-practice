import React from 'react';
import CounterView from './CounterView';

import {extendObservable} from 'mobx';
import {observer} from 'mobx-react';

class Counter extends React.Component {
  constructor() {
    super(...arguments);

    extendObservable(this, {
      count: 0
    });
  }

  onIncrement = () => {
    this.count ++;
  }

  onDecrement = () => {
    this.count --;
  }

  render() {
    return(
      <CounterView
        caption="With extendObservable"
        count={this.count}
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
        />
    );
  }

}

export default observer(Counter);

