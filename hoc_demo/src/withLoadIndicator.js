import React from 'react';
import LoadingIcon from './loading.gif';

const withLoadIndicator = (Component) => {
  class NewComponent = (props) => {
    if (props.value) {
      return <Component {...props} />;
    } else {
      return <img src={LoadingIcon} />;
    }
  }

  return NewComponent;
};

export default withLoadIndicator;
