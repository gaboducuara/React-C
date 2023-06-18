import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('prueba en < AddCategory.jsx />', () => {
    
    test('debe de cambiar el valor de la caja de texto', () => {
        //Sujeto de pruebas
        render( <AddCategory onNewCategory = { () => {} }/>);
        //Se extrae el input 
        const input = screen.getByRole('textbox');
        //Aqui se dispara el evento
        fireEvent.input( input, { target: { value: 'Saitama'}});
        expect( input.value ).toBe('Saitama');
        // screen.debug();
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const InputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory = { onNewCategory } />);
        //Se extrae el input 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: InputValue }});
        fireEvent.submit( form );
        // screen.debug();
        expect(input.value).toBe('');

        // Aqui llamamos la funcion
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        
        // aqui certifica que la funcion ah sido llamada con la caja de texto 
        expect(onNewCategory).toHaveBeenCalledWith( InputValue );
    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory = { onNewCategory } />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});