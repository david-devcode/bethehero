import React, {useState} from 'react';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  
  }
  return (
    <div>
      <Header>
        contador: {counter}</Header>
      <button onClick={increment}> Incrementar </button>
    </div>
  );
}

export default App;
