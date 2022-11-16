import React, { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	const [isDisabled, setDisabled] = useState(false);
	const [isDisabledDecrement, setDisabledDecrement] = useState(false);
	const increment = () => {
		if (count < 5) {
			setCount((c) => c + 1);
			setDisabledDecrement(false);
		} else {
			setDisabled(true);
		}
	};

	const decrement = () => {
		if (count > -5) {
			setCount((c) => c - 1);
			setDisabled(false);
		} else {
			setDisabledDecrement(true);
		}
	};
	const reset = () => {
		setCount(0);
		setDisabled(false);
		setDisabledDecrement(false);
	};

	return (
		<div className="counter center">
			<h1 className="counter__title">Counter App</h1>
			<div className="card center">
				<h2 className="card__title">Count : {count}</h2>
				<div className="card__btns">
					<button
						className="btn card__btn"
						disabled={isDisabled}
						onClick={increment}>
						+
					</button>
					<button
						className="btn card__btn"
						disabled={isDisabledDecrement}
						onClick={decrement}>
						-
					</button>
					<button className="btn card__btn" onClick={reset}>
						0
					</button>
				</div>
			</div>
		</div>
	);
};

export default Counter;
