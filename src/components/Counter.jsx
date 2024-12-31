import { useState } from "react";



const Counter = () => {
    const [count, setCount] = useState(0);

    const countIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }

    const countDecrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const countReset = () => {
        setCount(prevCount => prevCount - prevCount);
    }

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button onClick={countIncrement} className="btn card__btn" disabled={count === 5? true:false}>+</button>
          <button onClick={countDecrement} className="btn card__btn" disabled={count === -5? true:false}>-</button>
          <button onClick={countReset} className="btn card__btn">0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;