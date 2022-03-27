import React, { useState } from 'react';

function App() {
  const [count, setCount ] = useState(() => {
    console.log('run function') 
    return 4});

  function decrementCount() {
    setCount(prevCount => prevCount -1 )
    setCount(prevCount => prevCount - 1)
  }

  function increaseCount() {
    setCount(prevCount => prevCount + 1)
  }
  
  return (
   <div> 
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
   </div>
  );
}

export default App;
