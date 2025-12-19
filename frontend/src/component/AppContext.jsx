import React,{createContext} from 'react'
export let Appcontext=createContext();

export default function AppContext(props) {
    let secretData=34560
  return (
    <div>
        <Appcontext.Provider value={secretData}>
            {props.children}
            {/* children components */}
        </Appcontext.Provider>
    </div>
  )
}
