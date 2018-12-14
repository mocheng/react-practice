import React from 'react';

import padStart from 'lodash/padStart';

const ms2Time = (milliseconds) => {
  let time = milliseconds;
  const ms = milliseconds % 1000;
  time = (milliseconds - ms) / 1000;
  const seconds = time % 60;
  time = (time - seconds) / 60;
  const minutes = time % 60;
  const hours = (time - minutes) / 60;

  const result = padStart(hours, 2, '0') + ":" + padStart(minutes, 2, '0') + ":" + padStart(seconds, 2, '0') + "." + padStart(ms, 3, '0');
  return result;
}

const MajorClock = ({milliseconds=0, activated=false}) => {
  /*
  const style = {
    'font-family': 'monospace'
  };
  return <h1 style={style}>{ms2Time(milliseconds)}</h1>
  */
  return (
    <React.Fragment>
      <style jsx>{`
        h1 {
          color: ${activated? 'red' : 'black'};
          font-family: monospace;
        }
      `}</style>
      <h1>
        {ms2Time(milliseconds)}
      </h1>
    </React.Fragment>
  );
};

export default MajorClock;
