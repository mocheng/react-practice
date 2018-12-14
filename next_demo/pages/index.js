import React from 'react'

//import Link from 'next/link'

const timeout = (ms, result) => {
  return new Promise(resolve => setTimeout(() => resolve(result), ms));
};

const Home = (props) => (
  <h1>
    Hello {props.userName}
  </h1>
)

Home.getInitialProps = async () => {
  return await timeout(200, {userName: 'Morgan'});
};

export default Home
