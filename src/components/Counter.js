import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [State, setState] = useState({
    count: 0,
    incrementstuck: false,
    decrementstuck: false
  });

  const incrementCount = () => {
    {
      State.count >= 5
        ? setState({ incrementstuck: true, count: State.count })
        : setState({
            count: State.count + 1,
            incrementstuck: false
          });
    }
  };
  const decrementCount = () => {
    {
      State.count <= -5
        ? setState({ decrementstuck: true, count: State.count })
        : setState({
            count: State.count - 1,
            decrementstuck: false
          });
    }
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">{State.count}</h2>
        <div className="card__btns">
          <button
            className="btn card__btn"
            onClick={incrementCount}
            disabled={State.stuck ? true : false}>
            +
          </button>
          <button
            className="btn card__btn"
            onClick={decrementCount}
            disabled={State.stuck ? true : false}>
            -
          </button>
          <button className="btn card__btn" onClick={() => setState({ count: 0 })}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
