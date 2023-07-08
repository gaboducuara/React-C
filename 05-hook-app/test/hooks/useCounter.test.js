import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter';

describe('pruebas en el useCounter', () => {

    test('debe retornar los valores por defecto ', () => {  
        
        //renderHook nos sirve para renderizar hook de react en jest o testing
        const { result } = renderHook( () => useCounter( ));
        const { counter, decrement , increment , reset } = result.current
    
        expect( counter ).toBe( 10 );
        expect( decrement ).toEqual(expect.any ( Function ));
        expect( increment ).toEqual(expect.any ( Function ));
        expect( reset ).toEqual( expect.any ( Function ));

    });

    test('debe de generar el counter con el valor de 100 ', () => { 

        const { result } = renderHook( () => useCounter( 100 ));
        expect( result.current.counter ).toBe( 100 );

     });

     test('debe de incrementar el contador', () => {

        //renderHook nos sirve para renderizar hook de react en jest o testing
        const { result } = renderHook( () => useCounter( 100 ));
        const { counter, increment } = result.current;

        act(() => {
            increment();
            increment(2)
        });

        expect( result.current.counter).toBe(103)

     });

     test('debe de decrementar el contador', () => {

        //renderHook nos sirve para renderizar hook de react en jest o testing
        const { result } = renderHook( () => useCounter( 100 ));
        const { counter, decrement } = result.current;

        act(() => {
            decrement();
            decrement(2)
        });

        expect( result.current.counter).toBe( 97 );

     });

     test('debe de realizar el reset del contador', () => {

        //renderHook nos sirve para renderizar hook de react en jest o testing
        const { result } = renderHook( () => useCounter( 100 ));
        const { counter, reset, increment } = result.current;

        act(() => {
        increment();
        reset();
        });

        expect( result.current.counter).toBe( 100 );


     });
});