import React, {useState} from 'react';

const Counter = () => {
  const [counter, setCount] = useState(0);
  const resetHandler = ()=>{
    setCount(0)
  }
  const incrementHandler = ()=>{
    setCount(counter + 1)
  }
  const decrementHandler = ()=>{
    setCount(counter - 1)
  }
  

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {counter}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={incrementHandler} disabled = {counter === 5?true:false}>+</button>
          <button className="btn card__btn" onClick={decrementHandler} disabled = {counter === -5?true:false}>-</button>
          <button className="btn card__btn" onClick={resetHandler}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
