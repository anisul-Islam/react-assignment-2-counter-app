/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const inrement = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    // eslint-disable-next-line no-unused-vars
    setCount((count) => (count = 0));
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App </h1>
      <div className="card center">
        <p>Rimon</p>
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button
            className="btn card__btn"
            // disable increment button when count value is 5
            disabled={count === 5 ? true : false}
            onClick={inrement}>
            +
          </button>
          <button
            className="btn card__btn"
            // disable decrement button when count value is -5
            disabled={count === -5 ? true : false}
            onClick={decrement}>
            -
          </button>
          <button className="btn card__btn" onClick={reset}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
