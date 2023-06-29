import { useMemo, useState } from 'react';
import { useCounter } from '../hooks'

// asi funciona el MemoHook
const heavyStuff = ( iteraciones = 100 ) => {
    for (let i = 0; i < iteraciones; i++) {
        console.log('lest go, come here!')
    }

    return `${ iteraciones } iteraciones realizadas`
};

export const MemoHook = () => {
  
    const {counter , increment } = useCounter(100);
    const  [ show , setShow ]  = useState( true );

    // useMemo nos sirve para que no ocurra un cambio en el estado
    // del componente

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
    <>
        <h1>Counter: <small>{counter}</small>         </h1>
        <hr />

        <h4>{  memorizedValue}</h4>


        <button 
            className="btn btn-primary"
            onClick={() => increment() }
        >
            +1
        </button>

        <button 
            className='btn btn-outline-primary'
            onClick={() => setShow( !show ) }
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
