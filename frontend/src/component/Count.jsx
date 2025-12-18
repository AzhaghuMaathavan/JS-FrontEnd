import React from 'react';

function OnClick() {
    const[count,setCount]=React.useState(0)

    let handleClicks=()=>{
        setCount(count+1)
    }
    let handlemClicks=()=>{
        setCount(count-1)
    }
    return (
        <>
        <h1>Hello World</h1>
        <h2>Count Value: {count}</h2>
        <button onClick={handleClicks}>Add</button>
        <p> </p>
        <button onClick={handlemClicks}>Remove</button>
        </>
    )
}

export default OnClick;