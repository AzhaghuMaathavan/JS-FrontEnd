import React, { useReducer, useState } from 'react'
let newdata = {
    name: '',
    password: ''
}
let reducer = (state, action) => {
    return { ...state, [action.type]: action.val }

}

function Reducer() {
    let [data, dispatch] = useReducer(reducer, newdata)
    console.log(data);
    return (
        <div>
            <form action="">
                <input type="text" 
                onChange={(e) => dispatch({ type: 'name', val: e.target.value })}/>
                <br />
                <input type="password" 
                    onChange={(e) => dispatch({ type: 'password', val: e.target.value })}/>
                <h1>Name: {data.name}</h1>
                <h2>Password: {data.password}</h2>
            </form>
        </div>
    )
}

export default Reducer