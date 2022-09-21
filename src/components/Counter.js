import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1)
  }
  const handleDecrease = () => {
    setCount(count - 1)
  }
  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button onClick={handleIncrease} className="btn card__btn" disabled={count === 5} >+</button>
          <button onClick={handleDecrease} className="btn card__btn" disabled={count === -5} >-</button>
          <button onClick={handleReset} className="btn card__btn">0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
