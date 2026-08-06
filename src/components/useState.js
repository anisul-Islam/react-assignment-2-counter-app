import React, { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleIncreament}>Increase</button>
    </div>
  );
}

export default UseState;
