//PARTE DE CUSTOM HOOKS

//Esta parte es para realizar la logica del negocio
// en este archivo se centra la logica

import { useState } from "react"


export const useCounter = ( initialValue = 10) => {

    const [counter, setcounter] = useState( initialValue );

    // incremsenta +1 el contador
    const increment = ( value = 1) => {
        setcounter(( current ) => current + value);
    };

    // decrementa -1 el contador
    const decrement = ( value = 1 ) => {
        // choca contra el 0 y no baja mas
        if( counter === 0 ) return;
        setcounter( ( current ) => current - value)
    };

    // Resetea el contador al estado inicial
    const reset = () => {
        setcounter (initialValue)
    };

    return {
        counter , 
        increment , 
        decrement,
        reset
    };
};