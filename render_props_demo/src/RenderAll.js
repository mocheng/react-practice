import React from 'react';

const RenderAll = (props) => {
  return (
    <React.Fragment>
      {props.children(props)}
    </React.Fragment>
  );
};

export default RenderAll;

