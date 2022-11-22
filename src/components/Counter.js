import React,{ useState } from 'react';

const Counter = () => {
  
  const [count,setCount]=useState(0)
  const handleIncreament=()=>
  {
    setCount(count+1)
  }
  
  const handleDecreament=()=>
  {
    setCount(count-1)
  }
  const reset=()=>{
    setCount(0)
  }
 
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button disabled={(count>=5?true:false)} onClick={handleIncreament} className="btn card__btn">+</button>
          <button disabled={(count<=0?true:false)} onClick={handleDecreament} className="btn card__btn">-</button>
          <button onClick={reset}  className="btn card__btn">0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
