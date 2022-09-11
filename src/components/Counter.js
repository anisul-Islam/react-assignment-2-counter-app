import React from 'react'
import { useState } from 'react';

const Counter = () => {
  const [count, setcount] = useState(0);
  const handleIncreament = () => {
    setcount((count) => count + 1)
  }
  const handledecreament = () => {
    setcount((count) => count - 1)
  }

  const handleZero= ()=>{
    setcount(0)
  }
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={handleIncreament}
            disabled={count >= 5 ? true : false}
          >+</button>
          <button className="btn card__btn" onClick={handledecreament}
            disabled={count <= -5 ? true : false}>-</button>
          <button className="btn card__btn" onClick={handleZero}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
