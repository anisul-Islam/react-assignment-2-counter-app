import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incremment = () =>{
    setCount((count)=> count +1);
  }

  const decrement = () =>{
    setCount((count)=> count -1);
  }

  const reset = () =>{
    setCount((count)=> count *0);
  }
 
  return (
    <div className="counter center">

      <h1 className="counter__title">Counter App</h1>
      <div className="card center">

        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={incremment} disabled={count === 5 ? true : false}>+</button>
          <button className="btn card__btn" onClick={decrement} disabled={count === -5 ? true : false}>-</button>
          <button className="btn card__btn" onClick={reset}>0</button>
        </div>

      </div>

    </div>
  );
};

export default Counter;
