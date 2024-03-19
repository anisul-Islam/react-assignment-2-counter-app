import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };
  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };
  const handleReset = () => {
    setCounter((counter) => counter * 0);
  };
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {counter}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={handleIncrement} disabled={counter >= 5 ? true : false}>+</button>
          <button className="btn card__btn" onClick={handleDecrement} disabled={counter <= -5 ? true : false}>-</button>
          <button className="btn card__btn" onClick={handleReset}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
