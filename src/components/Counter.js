import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const add = () => setCount((prev) => (prev < 5 ? prev + 1 : prev));
  const subtract = () => setCount((prev) => (prev > -5 ? prev - 1 : prev));
  const reset = () => setCount(0);

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count: {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={add} disabled={count === 5}>
            +
          </button>
          <button className="btn card__btn" onClick={subtract} disabled={count === -5}>
            -
          </button>
          <button className="btn card__btn" onClick={reset} disabled={count === 0}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}
