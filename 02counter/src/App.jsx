import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(10)
//let counter=5

const addValue=()=>{
//   console.log("clicked",counter);
  
//  setCounter(counter++);
setCounter(prevCounter=>prevCounter+1)
setCounter(prevCounter=>prevCounter+1)
setCounter(prevCounter=>prevCounter+1)
setCounter(prevCounter=>prevCounter+1)
setCounter(prevCounter=>prevCounter+1)
 }

 const removeValue=()=>{
  console.log("clicked",counter);
  
 setCounter(counter--);
 }

 
  return (
    <>
      <h1>Chi or React</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addValue}>Adding Value {counter}</button>
      <br/>
      <button onClick={removeValue}>remove Value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
