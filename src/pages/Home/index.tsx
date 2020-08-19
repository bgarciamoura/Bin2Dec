import React, { useState, ChangeEvent } from 'react';

import './style.css';

const App = () => {
    const [binaryValue, setBinaryValue] = useState('');

    function handleNumberChange(event: ChangeEvent<HTMLInputElement>) {
        const regex = /^(\s*|[0-1]+)$/;
        const value = event.target.value;
        if (value.length > 8 || !regex.test(value)) {
            return;
        }
        setBinaryValue(value);
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
                <span>{binaryValue}</span>
            </div>
        </div>
    );
};

export default App;
