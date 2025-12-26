import React from 'react';
import CounterHox from './CounterHox';

function CounterOne({count, updatecount}) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={updatecount}>Update Count</button>
        </div>
    );
}

export default CounterHox(CounterOne);