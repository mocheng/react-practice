import React from 'react';

const getUserName = () => {
  const value = /uid=([^;]+)/.exec(document.cookie);
  return value && decodeURIComponent(value[1]);
}

const withLogin = (Component) => {
  class NewComponent = (props) => {
    const userName= getUserName();
    if (userName) {
      return <Component {...props} userName={userName}/>;
    } else {
      return null;
    }
  }

  return NewComponent;
};

const withLoginAndLogout = (ComponentForLogin, ComponentForLogout) => {
  class NewComponent = (props) => {
    if (getUserName()) {
      return <ComponentForLogin {...props} />;
    } else {
      return <ComponentForLogout{...props} />;
    }
  }
  return NewComponent;
};



export default withLogin;

