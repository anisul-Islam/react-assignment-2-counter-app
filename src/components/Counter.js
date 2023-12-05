/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';

const Counter = () => {
  let [state, setstate] = useState(0);

  const increment = () => {
    return setstate((state) => state = state + 1)
  }
  const decrement = () => {
    return setstate((state) => state = state - 1)
  }

  const reset = () => {
    return setstate(state = 0)
  }

  return (
    <>
      <div className="counter center">
        <h1 className="counter__title">Counter App</h1>
        <div className="card center">
          <h2 className="card__title">Count : {state}</h2>
          <div className="card__btns">
            <button className="btn card__btn" onClick={increment} disabled={(state == 5) ? true : false}>+</button>
            <button className="btn card__btn" onClick={decrement} disabled={(state == -5) ? true : false}>-</button>
            <button className="btn card__btn" onClick={reset}>0</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
