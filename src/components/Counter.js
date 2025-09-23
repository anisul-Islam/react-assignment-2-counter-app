import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const eventHandlerIncrement = () => {
    setCount(count + 1);
  };
  const eventHandlerDecrement = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count :{count}</h2>
        <div className="card__btns">
          <button onClick={eventHandlerIncrement} disabled={count >= 5} className="btn card__btn">
            +
          </button>
          <button onClick={eventHandlerDecrement} disabled={count <= -5} className="btn card__btn">
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
