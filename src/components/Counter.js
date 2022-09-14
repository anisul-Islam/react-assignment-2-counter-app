import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const restart = () => {
    setCount(0);
  };
  // const decrease = () => setCount - 1;
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btn">
          <button disabled={count === 5} className="btn card__btn" onClick={increase}>
            +
          </button>
          <button disabled={count === -5} className="btn card__btn" onClick={decrease}>
            -
          </button>
          <button className="btn card__btn" onClick={restart}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
