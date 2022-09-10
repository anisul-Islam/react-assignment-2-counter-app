import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const zero = () => {
    setCount(0);
  };
  let P = false;
  let M = false;
  if (count === 5) {
    P = true;
  }
  if (count === -5) {
    M = true;
  }
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" disabled={P} onClick={plus}>
            +
          </button>
          <button className="btn card__btn" disabled={M} onClick={minus}>
            {" "}
            -
          </button>
          <button className="btn card__btn" onClick={zero}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
