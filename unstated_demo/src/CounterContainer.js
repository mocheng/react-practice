import {Container} from 'unstated';

export default class CounterContainer extends Container {
  constructor(initCount) {
    super(...arguments);

    this.state = {count: initCount || 0};
  }

  //state = {count: 0};

  increment = () => {
    this.setState({count: this.state.count + 1});
  };

  decrement = () => {
    this.setState({count: this.state.count - 1});
  };
};


