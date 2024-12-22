import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

//we can directly insert jsx file using
// import{jsx as _jsc} from "react/jsx-runtime.js"




function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
// to inject the js in this method

const anotherUser = "Fuddu Uday"
const react = React.createElement(
  'a',{href: 'http://google.com' ,target: '_blank'},'click to open google',anotherUser
)
//as this object as well difine structure to write the items in 
// it all the variables are written at the end as it is by there name
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp/>
  
  </StrictMode>,
  // react

)
