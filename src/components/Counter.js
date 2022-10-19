/* eslint-disable */

import React, { useState } from 'react';

const Counter = () => {

  const [increment, setImcement] = useState(0);


  const Increment = () =>{
    setImcement(increment + 1);
  }

  const Decrement = () => {
    setImcement(increment - 1);
  }


  const Reset = () => {
    setImcement(increment - increment);
  }

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {increment}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={Increment} disabled={increment >= 5 ? true : false}>+</button>
          <button className="btn card__btn" onClick={Decrement} disabled={increment <= -5 ? true : false}>-</button>
          <button className="btn card__btn" onClick={Reset}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
