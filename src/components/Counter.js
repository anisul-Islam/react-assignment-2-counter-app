import React,{useState} from 'react';

const Counter = () => {
  const [Counter, setCounter] = useState(0);

  //for Incrementing the counter
  const handleIncrement = () => {
    setCounter(Counter + 1);
  }

  //for Decrementing the counter
  const handleDecrement = () => {
    setCounter(Counter - 1);
  }

  //for Resetting the counter
  const handleReset = () => {
    setCounter(0);
  }
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {Counter}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={handleIncrement} disabled={Counter===5 ? true:false}>+</button>
          <button className="btn card__btn" onClick={handleDecrement} disabled={Counter=== -5 ? true:false}>-</button>
          <button className="btn card__btn" onClick={handleReset}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
