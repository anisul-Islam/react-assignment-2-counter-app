import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCounter = (e, type) => {
        // console.log(e);
        if (type === "increment" && count !== 5)
            setCount((prevCount) => prevCount + 1);
        else if (type === "decrement" && count !== -5)
            setCount((prevCount) => prevCount - 1);
        else if (type === "zero") {
            setCount(0);
        }
    };
    return (
        <div className="counter center">
            <h1 className="counter__title">Counter App</h1>
            <div className="card center">
                <h2 className="card__title">Count : {count}</h2>
                <div className="card__btns">
                    <button
                        disabled={count === 5}
                        className="btn card__btn"
                        onClick={(e) => handleCounter(e, "increment")}>
                        +
                    </button>
                    <button
                        disabled={count === -5}
                        className="btn card__btn"
                        onClick={(e) => handleCounter(e, "decrement")}>
                        -
                    </button>
                    <button
                        className="btn card__btn"
                        onClick={(e) => handleCounter(e, "zero")}>
                        0
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
