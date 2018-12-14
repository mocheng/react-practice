import React from 'react';

const getUserName = () => {
  /*
  const value = /uid=([^;]+)/.exec(document.cookie);
  return value && decodeURIComponent(value[1]);
  */
  return 'Morgan';
}

const Login = (props) => {
  const userName = getUserName();

  if (userName) {
    const allProps = {userName, ...props};
    return (
      <React.Fragment>
        {props.children(allProps)}
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default Login;
