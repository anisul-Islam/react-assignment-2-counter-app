import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [btn, SetBtn] = useState({
    increment: false,
    decrement: false
  });

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    if (count == 5) {
      SetBtn({ ...btn, increment: true });
    } else if (count == -5) {
      SetBtn({ ...btn, decrement: true });
    } else {
      SetBtn({
        ...btn,
        increment: false,
        decrement: false
      });
    }
  }, [count]);

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button disabled={btn.increment} onClick={increment} className="btn card__btn">
            +
          </button>
          <button disabled={btn.decrement} onClick={decrement} className="btn card__btn">
            -
          </button>
          <button onClick={reset} className="btn card__btn">
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
