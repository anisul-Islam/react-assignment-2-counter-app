import React, { useState } from 'react';

const Counter = () => {
  const [Count , setCount] = useState(0);

  const IncrementS = () =>{
      console.log(Count)
      setCount(Count + 1)
  }
  const DecrementS = () =>{
    setCount(Count - 1)
  }
  const ZeroS = () =>{  
    setCount(0)
  }
  

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {Count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={IncrementS} disabled={Count==5 ?true:false}>+</button>
          <button className="btn card__btn" onClick={DecrementS} disabled={Count==-5 ?true:false}>-</button>
          <button className="btn card__btn" onClick={ZeroS}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
