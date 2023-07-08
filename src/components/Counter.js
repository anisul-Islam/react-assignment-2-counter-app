/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

const Counter = () => {

  let [number , setNumber] = useState(0);

 let increment = () => {
    setNumber(number = number + 1)
 }
 let decrement = () => {
   setNumber(number = number - 1)
 }
 let reset = () => {
  setNumber(number = number * 0)
 }

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {number}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={increment} disabled={number==5 ? true : false} >+</button>
          <button className="btn card__btn" onClick={decrement} disabled={number==-5} >-</button>
          <button className="btn card__btn" onClick={reset} >0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
