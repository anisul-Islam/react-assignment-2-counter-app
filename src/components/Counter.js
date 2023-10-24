/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

const Counter = () => {
  const [count, setcount] = useState(0);

  const increaseHandler = () => {
    setcount((prevCount) => prevCount + 1);
  };

  const decreaseHandler = () => {
    setcount((prevCount) => prevCount - 1);
  };

  const resetHandler = () => {
    setcount(0);
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count} </h2>
        <div className="card__btns">
          <button
            onClick={increaseHandler}
            disabled={count === 5 ? true : false}
            className="btn card__btn">
            +
          </button>
          <button
            onClick={decreaseHandler}
            disabled={count === -5 ? true : false}
            className="btn card__btn">
            -
          </button>
          <button onClick={resetHandler} className="btn card__btn">
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
