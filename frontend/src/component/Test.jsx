/*Default Props 

import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Test extends Component {
    render() {
        let {name='xyz'}=this.props
        return(
            <>
            <h1>Hello {name}</h1>
            </>
        )
    }
}

Test.propTypes={
    name:PropTypes.string.isRequired
} */
/* State Example
import React, { useState } from 'react'
function Test(){
    let [user,setuser]=useState({name:'John',age:30})

    let handle = () => {
        setuser((e) => {
            if(e.name==='John'){
                return {name: 'bob', age:25}
            }
            else{
                return {name:'John',age:30}
            }
        })
    }
    return (
        <div>
            <h1>Name: {user.name}</h1>
            <h2>Age: {user.age}</h2>
            <button onClick={handle}>Click</button>
        </div>
    )
}

export default Test
*/

/* OnChange Example
import React , { Component } from 'react'

export default class Test extends Component {
    state={
        name:''
    }
    handleClick=e=>{
        this.setState({name:e.target.value})
    }
    render(){
        return (
            <>
            <h1>Hello</h1>
            <input type="text" name="id" onChange={this.handleClick} />
            <p>Content: {this.state.name}</p>
            </>
        )
    }
}   
*/