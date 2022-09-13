/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

const CounterAlternative = () => {
  let [count, setCount] = useState(0);
  const handleBtn = (e) => {
    if (e.target.name === 'increment') {
      setCount(count + 1);
    } else if (e.target.name === 'decrement') {
      setCount(count - 1);
    } else if (e.target.name === 'reset') {
      setCount(0);
    }
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button
            className="btn card__btn"
            name="increment"
            onClick={(e) => handleBtn(e)}
            disabled={count === 5}>
            +
          </button>
          <button
            className="btn card__btn"
            name="decrement"
            onClick={(e) => handleBtn(e)}
            disabled={count === -5}>
            -
          </button>
          <button
            className="btn card__btn"
            name="reset"
            onClick={(e) => handleBtn(e)}
            disabled={count === 0}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterAlternative;
