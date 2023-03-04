/* eslint-disable*/
import React, { useState } from 'react';

const Counter = () => {

  const [value, setValue] = useState(0);

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {value}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={()=>setValue(value+1)} disabled={value>4?true:false}>+</button>
          <button className="btn card__btn"  onClick={()=>setValue(value-1)} disabled={value<-4?true:false}>-</button>
          <button className="btn card__btn"  onClick={()=>setValue(0)}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
