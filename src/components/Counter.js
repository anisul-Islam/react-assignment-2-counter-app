import React,{ useState} from 'react';

const Counter = () => {
  const [count,setCount] = useState(0)

  const IncrementHandle =() =>{
    setCount(count + 1)
  }
  const DecrementHandle = () =>{
    setCount(count - 1)
  }
  const ResetCount =() =>{
    setCount(0)
  }
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={IncrementHandle} disabled={count === 5 ?true : false}>+</button>
          <button className="btn card__btn" onClick={DecrementHandle} disabled={count === -5 ?true : false}>-</button>
          <button className="btn card__btn" onClick={ResetCount}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
