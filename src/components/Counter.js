import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increaseBtn = () => {
    // eslint-disable-next-line prettier/prettier
    setCounter(counter + 1)
  };

  const decreaseBtn = () => {
    // eslint-disable-next-line prettier/prettier
    setCounter(counter - 1)
  };
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count :{counter}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={increaseBtn} disabled={counter === 5}>
            +
          </button>
          <button className="btn card__btn" onClick={decreaseBtn} disabled={counter === 0}>
            -
          </button>
          <button className="btn card__btn" onClick={() => setCounter(0)}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
