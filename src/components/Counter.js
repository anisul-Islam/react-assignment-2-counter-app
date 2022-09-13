import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter center">
      <h1 className="text-light">Counter App</h1>
      <div className="card center bg-light bg-opacity-25 border-none">
        <h2 className="text-light">Count : {count}</h2>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            className="btn btn-danger"
            onClick={() => setCount(count + 1)}
            disabled={count >= 5}>
            +
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setCount(count - 1)}
            disabled={count <= -5}>
            -
          </button>
          <button className="btn btn-danger" onClick={() => setCount(0)}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
