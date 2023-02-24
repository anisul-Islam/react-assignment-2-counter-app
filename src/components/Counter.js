import React, { useState } from 'react';

const Counter = () => {
  let [count, setcount] = useState(0);
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button
            onClick={() => setcount(count + 1)}
            disabled={count === 5}
            className="btn card__btn">
            +
          </button>
          <button
            onClick={() => setcount(count - 1)}
            disabled={count === -5}
            className="btn card__btn">
            -
          </button>
          <button onClick={() => setcount(0)} className="btn card__btn">
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
