import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button
            className="btn card__btn"
            disabled={count === 5 ? true : false}
            onClick={plus}
          >
            +
          </button>
          <button
            className="btn card__btn"
            disabled={count === -5 ? true : false}
            onClick={minus}
          >
            {" "}
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
