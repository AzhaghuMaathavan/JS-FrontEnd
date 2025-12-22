import { useState } from 'react'

function useCounter(initialValue = 0) {
    const {count , setCount} = useState(initialValue)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return {count , increment , decrement }
}

export default useCounter


/* Another method 

import { useState } from 'react'

function useCounter(initialValue = 0) {
    const {count , setCount} = useState(initialValue)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    return {count , increment , decrement }
}

export default useCounter
*/



/* 
These values are always treated as false in a condition (if, while , ternary , etc..)
false
0
-0
0n
" " //empty string
null
undefined
NaN


Everything else is truthy , even if it looks "false-like"
ture
1
-1
"0"
"false"
" "
[]
()
*/
