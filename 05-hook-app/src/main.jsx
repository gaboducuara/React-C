import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'

//import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHooks /> */}
    {/* <FormWithCustomHooks /> */}
    <MultipleCustomHook />
  </React.StrictMode>,
)
