import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((count) => count + 1);
  };

  const minus = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount((count) => count - count);
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button onClick={plus} className="btn card__btn" disabled={count === 5 ? true : false}>
            +
          </button>
          <button onClick={minus} className="btn card__btn" disabled={count === -5 ? true : false}>
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
