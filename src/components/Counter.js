import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    count <= 4 ? setCount(count + 1) : '';
  };
  const handleResent = () => {
    setCount(0);
  };
  const handleDecrement = () => {
    count >= -4 ? setCount(count - 1) : '';
  };

  return (
    <div className="counter center">
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button onClick={handleIncrement} className="btn card__btn">
            +
          </button>
          <button onClick={handleResent} className="btn card__btn">
            0
          </button>
          <button onClick={handleDecrement} className="btn card__btn">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
