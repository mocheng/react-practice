import React from 'react';

const getUserName = () => {
  /*
  const value = /uid=([^;]+)/.exec(document.cookie);
  return value && decodeURIComponent(value[1]);
  */
  return 'Morgan';
}

const Auth= (props) => {
  const userName = getUserName();

  if (userName) {
    const allProps = {userName, ...props};
    return (
      <React.Fragment>
        {props.login(allProps)}
      </React.Fragment>
    );
  } else {
    <React.Fragment>
      {props.nologout(props)}
    </React.Fragment>
  }
};

export default Auth;
