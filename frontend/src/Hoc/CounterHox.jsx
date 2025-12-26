import React, { useState } from 'react';

function CounterHox(Comp) {
    function Counter() {
        const [count, setCount] = useState(0);

        let update=()=>{
            setCount(count=>count+1)
        }
        return<Comp update={update} count={count}/>
    }
    return Counter;
}

export default CounterHox;