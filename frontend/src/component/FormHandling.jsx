import React, { useState } from 'react'

function FormHandling(){
    let[name,setName]=useState('')

    let handleChange=(e)=>{
        setName(e.target.value)
    }

    let handlesubmit=(e)=>{
        e.preventDefault()
        console.log(name)
    }
    return (
        <>
        <form onSubmit={handlesubmit}>
            <input type="text" onChange={handleChange} required maxLength={20}
            minLength={3} />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default FormHandling