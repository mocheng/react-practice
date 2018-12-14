import React from 'react';

import SmileFace from './yaoming_simile.png';

/*
const Joke = ({value}) => {
  return (
    <div>
      <img src={SmileFace} />
      {value || 'loading...' }
    </div>
  );
}
*/

class Joke extends React.PureComponent {
  render() {
    return (
      <div>
        <img src={SmileFace} />
        {this.props.value || 'loading...' }
      </div>
    );
  }
}

export default Joke;
