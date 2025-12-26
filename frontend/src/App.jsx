import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterHox from './component/Hoc/CounterHox';
import CounterOne from './component/Hoc/CounterOne';


function App() {
  return (
    <div>
      <CounterOne />
      <CounterHox />
    </div>
  )
}

export default App
