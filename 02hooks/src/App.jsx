import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//useState is a hook used for the implementation of variable in the UI


  // let counter = 5;
// As the variable can't be represent in the UI of the Interface


// usestate saves the value in the form of array,
// under bracket we write the value the variable we want to assign 
 let [counter, setCounter] = useState(15);
//setCounter is a function which is responsible for the updation of the counter(we can give any name to it) 
//the value of counter will be updated every where,without using the whole convention of JS
  const addValue = () =>{
    // console.log("Added")
    // counter = counter+1;
    // setCounter(counter);
//    calling of the function (we can directly  write in the bracket )
//setCounter(counter+1);

if(counter<20)
  {setCounter(counter+1);}
  else {setCounter(counter)};
}
  const removeValue=()=>{
    if(counter>0)
    {setCounter(counter-1);}
    else {setCounter(counter)};
  }
  return (
    <>
      <h1> Counter Project</h1>
      <h3> Counter Value {counter}</h3>
      <button onClick={addValue}>Add Counter</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Counter</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
