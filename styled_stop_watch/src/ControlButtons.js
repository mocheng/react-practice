import React from 'react';

import "./ControlButtons.css";

const ControlButtons = ({activated, onStart, onPause, onReset, onSplit}) => {
  if (activated) {
    return (
      <div>
        <button className="left-btn" onClick={onSplit}>计次</button>
        <button className="right-btn" onClick={onPause}>停止</button>
      </div>
    );
  } else {
    return (
      <div>
        <button className="left-btn" onClick={onReset}>复位</button>
        <button className="right-btn" onClick={onStart}>启动</button>
      </div>
    );
  }
};

export default ControlButtons;
