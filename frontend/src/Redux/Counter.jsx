import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {INCREMENT, DECREMENT } from './Action';

function Counter() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
        </div>
    )
}

export default Counter;