import React, { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  // eslint-disable-next-line no-unused-vars
  function resetCount() {
    setCount(0);
  }
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btn">
          <button
            className="btn card__btn : btn:disabled "
            onClick={incrementCount}
            disabled={count === 5}>
            +
          </button>
          <button
            className="btn card__btn : btn:disabled"
            onClick={decrementCount}
            disabled={count === -5}>
            -
          </button>
          <button className="btn card__btn" onClick={resetCount}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
