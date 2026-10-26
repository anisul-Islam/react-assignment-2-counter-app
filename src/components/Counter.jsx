import { useState } from "react";


const Counter = () => {

  const [counterNumber, setCounterNumber] = useState(0);
  const handleIncrement = () =>{
   
   setCounterNumber(counterNumber + 1)
    
  }

  const handelDecrement = () => {
      setCounterNumber(counterNumber - 1)
  }

  const handleReset = () => {
    setCounterNumber(0);
  }
 

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title text-2xl font-bold">
          Count : {counterNumber}
        </h2>
        <div className="card__btns">
          <button
            disabled={counterNumber >= 5}
            onClick={() => handleIncrement()}
            className="btn card__btn"
          >
            +
          </button>
          <button
            onClick={() => handelDecrement()}
            disabled={counterNumber <= -5}
            className={`btn card__btn`}
          >
            -
          </button>
          <button onClick={() => handleReset()} className="btn card__btn">0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
