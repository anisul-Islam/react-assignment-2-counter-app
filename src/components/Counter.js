/* eslint-disable prettier/prettier */
import React, { useState } from 'react';


const Counter = () => {

  const [count, setCount] = useState(0);

  const increamentHandler = () => {
    setCount(count + 1);
  };
  function decreamentHandler() {
    setCount(count - 1);
  }
  
  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button onClick={ increamentHandler } className="btn card__btn" disabled={count === 5? true : false } >
            +
          </button>
          <button onClick={ decreamentHandler } className="btn card__btn"  disabled={count === -5 ? true : false }>
            -
          </button>
          <button onClick={ resetHandler } className="btn card__btn"  >
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
