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
		const values = [
			1,
			2,
			4,
			8,
			16,
			32,
			64,
			128,
			256,
			512,
			1024,
			2048,
			4096,
			8192,
			16384,
			32768,
		];
		const binArray = binaryValue.split('').reverse();
		const newDecimalValue = binArray.reduce(
			(accumulator, currentValue, index, array) => {
				if (array[index] == '1') {
					accumulator += values[index];
				}
				return accumulator;
			},
			0,
		);
		setDecimalValue(String(newDecimalValue));
		// binArray.forEach((item, indice) => {
		// 	console.log(item, indice + 1);
		// });
		// console.log(binArray);
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
