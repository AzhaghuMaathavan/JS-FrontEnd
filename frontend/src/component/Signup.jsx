import React from 'react'

function Signup() {
    const[count,setCount]=React.useState(0)

    let handleClicks=()=>{
        setCount(count+1)
    }
    let handlemClicks=()=>{
        setCount(count-1)
    }
  return (
    <>
    <h1 style={{color: 'orange'}}>Hello World</h1>
    <h2 style={{color: 'blue'}}>Count Value: {count}</h2>
    <button style={{backgroundColor: 'green', color: 'white'}} onClick={handleClicks}>Add to cart</button>
    <p> </p>
    <button style={{backgroundColor: 'red', color: 'white'}} onClick={handlemClicks}>Remove from cart</button>
    </>
  )
}

export default Signup
