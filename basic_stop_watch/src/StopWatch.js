import React, {Fragment} from 'react';

import MajorClock from './MajorClock';
import ControlButtons from './ControlButtons';
import SplitTimes from './SplitTimes';

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
    offsetTime: 0
  }

  onStart = () => {
    this.setState({
      isStarted: true,
      startTime: new Date().getTime(),
      currentTime: new Date().getTime(),
    });

    this.intervalHandle = setInterval(() => {
      let newTime = new Date().getTime() + this.state.offsetTime;
      this.setState({currentTime: newTime});
    }, 1000 / 60);
  }

  onPause = () => {
    const offsetTime = this.state.currentTime - this.state.startTime;
    clearInterval(this.intervalHandle);
    this.setState({
      isStarted: false,
      offsetTime
    });
  }

  onReset = () => {
    this.setState({
      isStarted: false,
      startTime: null,
      currentTime: null,
      splits: [],
      offsetTime: 0
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
    this.setState({
      splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
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
