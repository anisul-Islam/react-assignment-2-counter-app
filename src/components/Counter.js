import React,{useState} from 'react';

const Counter = () => {
  const[count,setCount]=useState(0);

  const handleIncrement = () => {
    setCount((count) => count+1);
  }

  const handleDecrement = () => {
    setCount((count) => count-1);
  }

  const handleReset = () => {
    setCount(0);
  }
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={handleIncrement} disabled = {count===5 ? true:false}>+</button>
          <button className="btn card__btn" onClick={handleDecrement} disabled = {count===-5 ? true:false}>-</button>
          <button className="btn card__btn" onClick={handleReset}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
