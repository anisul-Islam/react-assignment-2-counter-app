import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown, FaBullseye } from "react-icons/fa";
const Counter = () => {
  let [count, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((count = count + 1));
  }

  const handleDecrement = () =>{
    setCounter((count = count - 1));
  }

  const makeReset = () => {
    setCounter(count = 0);
  }
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button onClick={handleIncrement}  disabled= {count >= 5 ? true : false} className="btn card__btn"><FaAngleUp /></button>
          <button onClick={handleDecrement}  disabled= {count <= -5 ? true : false} className="btn card__btn"><FaAngleDown /></button>
          <button onClick={makeReset} className="btn card__btn"><FaBullseye /></button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
