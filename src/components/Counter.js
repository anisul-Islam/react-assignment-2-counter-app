import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      
      <div className="card center">
        <h2 className="card__title">Count : {counter}</h2>
        <div className="card__btns">
          {counter > 4 ? (
            <button disabled onClick={() => setCounter(counter + 1)} className="btn card__btn">
              +
            </button>
          ) : (
            <button onClick={() => setCounter(counter + 1)} className="btn card__btn">
              +
            </button>
          )}
          {counter >= -4 ? (
            <button  onClick={() => setCounter(counter - 1)} className="btn card__btn">
              -
            </button>
          ) : (
            <button disabled onClick={() => setCounter(counter - 1)} className="btn card__btn">
              -
            </button>
          )}

          <button onClick={() => setCounter(0)} className="btn card__btn">
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
