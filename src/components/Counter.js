import { React, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseButton = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };
  const decreaseButton = () => {
    if (count > -5) {
      setCount(count - 1);
    }
  };
  const resetButton = () => setCount(0);
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button disabled={count == 5} className="btn card__btn" onClick={increaseButton}>
            +
          </button>
          <button disabled={count == -5} className="btn card__btn" onClick={decreaseButton}>
            -
          </button>
          <button className="btn card__btn" onClick={resetButton}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
