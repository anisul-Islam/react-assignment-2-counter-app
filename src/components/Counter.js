import React,{useState} from 'react';

const Counter = () => {
  let [count,setCount]=useState(0)
  let HandleIncrement=()=>{
    setCount(count+1)
  }
  let HandleDecrement=()=>{
    setCount(count-1)
  }
  let HandleReset=()=>{
    setCount(count=0)
  }
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count :{count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={HandleIncrement} disabled={count===5?true:false}>+</button>
          <button className="btn card__btn" onClick={HandleDecrement} disabled={count===-5?true:false}>-</button>
          <button className="btn card__btn" onClick={HandleReset}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
