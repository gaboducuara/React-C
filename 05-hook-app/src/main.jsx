
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainApp } from './09-useContex/MainApp';
import { BrowserRouter } from "react-router-dom";
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro_reducer'

// import { CallbackHook } from './06-memos/CallbackHook';
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLayouEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
//import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
   ) 
