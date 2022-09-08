import React from 'react';

const Counter = () => {
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : 0</h2>
        <div className="card__btns">
          <button className="btn card__btn">+</button>
          <button className="btn card__btn">-</button>
          <button className="btn card__btn">0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
