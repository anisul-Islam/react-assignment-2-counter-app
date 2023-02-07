/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

function Counter() {

    const [count, setState] = useState(0);
    const handleIncrement = () =>{
        setState(count + 1);
    }
    const handleDecreament = () => {
        setState(count - 1);
    }
    const resetValue = () => {
         setState(0)
    }

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={handleIncrement} disabled={count===5 ? true : false}>+</button>
          <button className="btn card__btn" onClick={handleDecreament} disabled={count===-5 ? true : false}>-</button>
          <button className="btn card__btn" onClick={resetValue} disabled={count===0 ? true : false}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
