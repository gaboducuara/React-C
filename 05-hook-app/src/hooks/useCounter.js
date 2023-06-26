//PARTE DE CUSTOM HOOKS

//Esta parte es para realizar la logica del negocio
// en este archivo se centra la logica

import { useState } from "react"


export const useCounter = ( initialValue = 48) => {

    const [counter, setcounter] = useState( initialValue );

    // incremsenta +1 el contador
    const increment = ( value = 1) => {
        setcounter(counter + value);
    };

    // decrementa -1 el contador
    const decrement = ( value = 1 ) => {
        // choca contra el 0 y no baja mas
        if( counter === 0 ) return;
        setcounter(counter - value)
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