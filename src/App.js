import './App.css';
import React, {useState} from 'react';

function App() {

  const [count, setCount ] = useState(4);
  // const onClick() {
  //   setCount() {console.log(count)}
  // }
  return (
   <> 
      <button>-</button>
      <span>0</span>
      <button>+</button>
   </>
  );
}

export default App;
