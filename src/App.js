import './App.css';
import React, {useState} from 'react';

function App() {

  const [count, setCount ] = useState(4);

  function decrementCount() {
    setCount(count - 1)
  }
  // const onClick() {
  //   setCount() {console.log(count)}
  // }
  return (
   <> 
      <button onClick={decrementCount}>-</button>
      <span>0</span>
      <button>+</button>
   </>
  );
}

export default App;
