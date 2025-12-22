import DisplayCounter from "./DisplayCounter"

function DisplayCounter() {
    const {count , increment , decrement} = useCounter(10);  
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default DisplayCounter
