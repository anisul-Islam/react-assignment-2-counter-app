import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevState) => prevState + 1)
  }

  const decreaseCount = () => {
    setCount((prevState) => prevState - 1)
  }

  const clearCount = () => {
    setCount(0)
  }

  return (
    
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button disabled={count === 5 && true } onClick={increaseCount} className="btn card__btn">+</button>
          <button disabled={count === -5 && true } onClick={decreaseCount} className="btn card__btn">-</button>
          <button onClick={clearCount} className="btn card__btn">0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
