import React, { useState, ChangeEvent, useEffect } from 'react';

import './style.css';

const App = () => {
	const [binaryValue, setBinaryValue] = useState('');
	const [decimalValue, setDecimalValue] = useState('');

	useEffect(() => {
		convertToDec();
	}, [binaryValue]);

	function handleNumberChange(
		event: ChangeEvent<HTMLInputElement>,
	) {
		const regex = /^(\s*|[0-1]+)$/;
		const value = event.target.value;
		if (value.length > 16 || !regex.test(value)) {
			alert('Only binary numbers allowed. [0-1]');
			return;
		}
		setBinaryValue(value);
	}

	function convertToDec() {
		const binArray = binaryValue.split('').reverse();
		const newDecimalValue = binArray.reduce(
			(accumulator, currentValue, index, array) => {
				if (array[index] == '1') {
					accumulator += Math.pow(2, index);
				}
				return accumulator;
			},
			0,
		);
		setDecimalValue(String(newDecimalValue));
	}

	return (
		<div className="container">
			<h1>Binary to Decimal</h1>
			<div className="input-container">
				<input
					type="text"
					value={binaryValue}
					onChange={handleNumberChange}
				/>
			</div>
			<div className="converted-value-container">
				<span>{decimalValue}</span>
			</div>
		</div>
	);
};

export default App;
