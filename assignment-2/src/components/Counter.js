import React, {useState} from 'react';

const Counter = () => {
  const [count,setCount] =useState(0);
  const incrementHandler= ()=>{

    setCount((preCount) =>preCount+1);
  };

  const decrementHandler=()=> {

    setCount((preCount)=>preCount-1);
  };
  const resetHandler =()=>{
    setCount(0);
  }
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={incrementHandler} disabled={count >=5} >+</button>
          <button className="btn card__btn" onClick={decrementHandler} disabled={count <=-5}>-</button>
          <button className="btn card__btn" onClick={resetHandler}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
