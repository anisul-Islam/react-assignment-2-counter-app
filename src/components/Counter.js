import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  const incrementHandler = () => {
    setValue(value + 1);
  };

  const decrementHandler = () => {
    setValue(value - 1);
  };

  const resetHandler = () => {
    setValue(0);
  };
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {value}</h2>
        <div className="card__btns">
          <button
            className="btn card__btn"
            onClick={incrementHandler}
            disabled={value == 5 ? true : false}>
            +
          </button>
          <button
            className="btn card__btn"
            onClick={decrementHandler}
            disabled={value == -5 ? true : false}>
            -
          </button>
          <button className="btn card__btn" onClick={resetHandler}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
