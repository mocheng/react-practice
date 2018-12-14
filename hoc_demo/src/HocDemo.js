import React from 'react';
import withLoadIndicator from './withLoadIndicator';

import withLogin from './withLogin';

const Title = ({value}) => {
  return <h1>{value}</h1>;
}

const Desc = ({value}) => {
  return <p>{value}</p>;
};

const WithLoadingTitle = withLoadIndicator(Title);

const WithLoadingDesc = withLoadIndicator(Desc);

const LogoutButton = withLogin(
  () => (
    <button>logout</button>
  )
);

const HocDemo = () => {
  return (
    <div>
      <WithLoadingTitle />
      <WithLoadingDesc value="hello world" />

      <LogoutButton />
    </div>
  );
};

export default HocDemo;
