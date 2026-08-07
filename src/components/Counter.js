import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount(count + 1);
  };

  const handleDecreament = () => {
    setCount(count - 1);
  };

  const  handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="counter center">
        <h1 className="counter__title">Counter App</h1>
        <div className="card center">
          <h2 className="card__title">Count :{count}</h2>
          <div className="card__btns">
            <button className="btn card__btn" onClick={handleIncreament} disabled={count === 5 ? true : false}>+</button>
            <button className="btn card__btn" onClick={handleDecreament} disabled= {count === -5 ? true : false}>-</button>
            <button onClick={handleReset}> Reset </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
