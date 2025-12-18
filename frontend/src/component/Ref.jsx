import React, { useRef, useState } from 'react'

/*export default function Ref() {
    const inputRef = useRef()
    const h1Ref = useRef()

    const handleInputChange = () => {
        h1Ref.current.textContent = `Hello ${inputRef.current.value}`
    }
    return (
        <div>
            <h1 ref={h1Ref}>Hello </h1>
            <input 
                type="text" placeholder='Enter your name' ref={inputRef} onChange={handleInputChange}
            />
        </div>
    )
}*/

export default function Ref() {
    let [print,setPrint]=useState('')
    let inputref=useRef()
    return(
        <>
        <input type="text" placeholder='Enter your name' ref={inputref}
         onChange={() => setPrint(inputref.current.value)}/>
         <br />
         <h1 id="print">Hello: {print}</h1>
        </>
    )
}