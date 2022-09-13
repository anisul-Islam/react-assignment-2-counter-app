import React, { useState } from 'react';

const Counter = () => {
  const [result, setResult] = useState(0);

  const handleCounter = (e) => {
    if (e === 'plus') {
      setResult(result + 1);
    }
    if (e === 'minus') {
      setResult(result - 1);
    }
    if (e === 'reset') {
      setResult(0);
    }
  };
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {result}</h2>
        <div className="card__btns">
          {
            <button
              disabled={result >= 5}
              onClick={() => handleCounter('plus')}
              className="btn card__btn">
              +
            </button>
          }
          <button
            disabled={result <= -5}
            onClick={() => handleCounter('minus')}
            className="btn card__btn">
            -
          </button>
          <button onClick={() => handleCounter('reset')} className="btn card__btn">
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
