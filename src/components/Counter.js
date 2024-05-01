/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => count + 1);

  const decrement = () => setCount((count) => count - 1);

  const reset = () => setCount((count) => count * 0);

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button onClick={increment} disabled={count === 5} className="btn card__btn">
            +
          </button>
          <button onClick={decrement} disabled={count === -5} className="btn card__btn">
            -
          </button>
          <button onClick={reset} className="btn card__btn">
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
