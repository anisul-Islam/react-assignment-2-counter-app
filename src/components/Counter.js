import React, { useState } from 'react'

const Counter = ()=> {
  const [count, setCount] = useState(0);
    
  const handleIncrement = ()=> {
    setCount((prevState) => prevState + 1);
  }

  const handleDecrement = ()=> {
    setCount((prevState) => prevState - 1);
  }

  const handleReset = ()=> {
    setCount((prevState) => prevState = 0);
  }

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={handleIncrement} disabled={(count === 5) ? true:false}> + </button>
          <button className="btn card__btn" onClick={handleDecrement} disabled={(count === -5) ? true:false}> - </button>
          <button className="btn card__btn" onClick={handleReset} disabled={(count === 0) ? true:false}> 0 </button>
        </div>
      </div>
    </div>
  )
}

export default Counter;
