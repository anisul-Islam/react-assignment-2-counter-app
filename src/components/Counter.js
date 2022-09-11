import React, { useState } from 'react';

const Counter = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum((pre) => (pre < 5 ? pre + 1 : pre));
  };

  const decrement = () => {
    setNum((pre) => (pre > -5 ? pre - 1 : pre));
  };

  const reset = () => {
    setNum(0);
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {num}</h2>
        <div className="card__btns">
          <button disabled={num === 5} className="btn card__btn" onClick={increment}>
            +
          </button>
          <button disabled={num === -5} className="btn card__btn" onClick={decrement}>
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
