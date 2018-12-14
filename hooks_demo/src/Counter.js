import React, {useState, useContext, useEffect} from 'react';
import ThemeContext from './ThemeContext';

/*
class Couter extends React.Component {
  state = {count: 0};

  onIncrement = () => {
    this.setState({count: this.state.count +1});
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={onIncrement}>+</button>
      </div>
    );
  }

}
*/



const Counter = () => {
  const [count, setCount] = useState(0);

  /*
  useEffect(() => {
    document.title = count;
  });

  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect((prevProps, prevState) => {
    console.log('# prevProps ', prevProps);
    console.log('# prevState ', prevState);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const theme = useContext(ThemeContext);
  console.log('#theme', theme);
  */

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {/*
      <div>window width: {width}</div>
      <div>{theme}</div>
      */}
    </div>
  );
};

export default Counter;
