import React ,{useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [massage , setMassage] = useState("")
  const increment =()=>{
    // console.log("increment");
    if (count < 5) setCount(count + 1)
    else{setMassage("can not increse the number gater then 5")}
  }
  const decrement =()=>{
    // console.log("decrement");
    if(count > -5) setCount(count => count - 1)
    else{setMassage("can not decrease the number less then -5")}
  }
  const reset =()=>{
    // console.log("reset");
    setCount(0)
    setMassage("Reset the value 0")
  }



  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={increment}>+</button>
          <button className="btn card__btn" onClick={decrement}>-</button>
          <button className="btn card__btn" onClick={reset}>0</button>
          <p>{massage}</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
