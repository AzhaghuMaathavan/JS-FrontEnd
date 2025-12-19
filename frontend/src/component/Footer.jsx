import React, {useContext}from 'react'
import {Appcontext} from './AppContext'
export default function Footer() {
    let data=useContext(Appcontext)
  return (
    <div>
      <h1>Footer Component {data}</h1>
    </div>
  )
}
