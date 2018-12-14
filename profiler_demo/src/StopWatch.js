import React, {Fragment} from 'react';

import MajorClock from './MajorClock';
import ControlButtons from './ControlButtons';
import SplitTimes from './SplitTimes';

import {unstable_trace as trace, unstable_wrap as wrap} from 'scheduler/tracing';

class StopWatch extends React.Component {
  /*
  constructor() {
    super(...arguments);

    this.state = {
      isStarted: false,
      startTime: null,
      currentTime: null,
      splits: [],
    };

    //this.onSplit = this.onSplit.bind(this);
  }
  */

  state = {
    isStarted: false,
    startTime: null,
    currentTime: null,
    splits: [],
  }

  onStart = () => {
    trace('click start button', performance.now(), () => {
      this.setState({
        isStarted: true,
        startTime: new Date(),
      });

      /*
      this.intervalHandle = setInterval(() => {
        this.setState({currentTime: new Date()});
      }, 1000 / 60);
      */

      // this wrap makes all interval update attributed to `click start button`.
      this.intervalHandle = setInterval(wrap(() => {
        this.setState({currentTime: new Date()});
      }), 1000 / 60);
    });
    /*
    this.setState({
      isStarted: true,
      startTime: new Date(),
    });

    this.intervalHandle = setInterval(() => {
      this.setState({currentTime: new Date()});
    }, 1000 / 60);
    */
  }

  onPause = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      isStarted: false,
    });
  }

  onReset = () => {
    this.setState({
      startTime: null,
      currentTime: null,
      splits: [],
    });
  }

  /*
  onSplit() {
    this.setState({
      splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
    });
  }
  */

  onSplit = () => {
    trace('click split button', performance.now(), () => {
      this.setState({
        splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
      });
    });
  }

  render() {
    return (
      <Fragment>
        <MajorClock milliseconds={this.state.currentTime - this.state.startTime}/>
        <ControlButtons
          activated={this.state.isStarted}
          onStart={this.onStart}
          onPause={this.onPause}
          onReset={this.onReset}
          onSplit={this.onSplit}
        />
        <SplitTimes value={this.state.splits} />
      </Fragment>
    );
  }
}

export default StopWatch;
