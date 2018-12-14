import React from 'react';
import {unstable_batchedUpdates} from 'react-dom';

class Counter extends React.Component {
  state = {
    count: 0
  }

  onIncrement = () => {
    this.setState(state => ({count: state.count + 1}));
    console.log('# in onIncrement this.state', this.state.count);
  }

  onIncrementSync = () => {
    setTimeout(() => {
      this.setState(state => ({count: state.count + 1}));
      console.log('# in onIncrementSync this.state', this.state.count);
      this.setState(state => ({count: state.count + 1}));
      console.log('# in onIncrementSync this.state', this.state.count);
    }, 0);
  }

  onIncrementBatched = () => {
    setTimeout(() => {
      unstable_batchedUpdates(() => {
        this.setState(state => ({count: state.count + 1}));
        console.log('# in unstable_batchedUpdates this.state', this.state.count);
        this.setState(state => ({count: state.count + 1}));
        console.log('# in unstable_batchedUpdates this.state', this.state.count);
 
      });
      console.log('# out of unstable_batchedUpdates this.state', this.state.count);
    }, 0);
  }

  onDecrement = () => {
    this.setState(state => ({count: state.count - 1}));
  }

  render() {
    console.log('# enter render');
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onIncrementSync}>+ sync</button>
        <button onClick={this.onIncrementBatched}>+ batched</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;

