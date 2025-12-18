import React from 'react'

function Login(props) {
    return (
        <div>
            <h1>Hello {props.name},
                age is {props.age}
            </h1>
        </div>
    )
}

export default Login
/*export function Login() {
    let data=false
    let res
    if(data==true){
        res="You are online"
    }else{
        res="You are offline"
    }
    /*return (
        <div>
            <h2>{data ? 'You are online' : 'You are offline'}</h2>
        </div>
    ) */
/*return (
        <h1>{res}</h1>
    )
}*/