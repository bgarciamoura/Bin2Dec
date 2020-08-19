import React, { useState, ChangeEvent } from 'react';

import './style.css';

const App = () => {
    const [binaryValue, setBinaryValue] = useState(0);

    function handleNumberChange(event: ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.target.value);
        setBinaryValue(value);
    }

    return (
        <div className="container">
            <h1>Binary to Decimal</h1>
            <div className="input-container">
                <input
                    type="text"
                    min="0"
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
