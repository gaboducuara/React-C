
import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 1, 
            increment: mockIncrement
        })
        //significa  -> antes de cada una de las pruebas
        beforeEach(() => {
            jest.clearAllMocks();
        });

    test('debe de mostrar el componente por defecto', () => {
        
        useFetch.mockReturnValue({
            data: null, isLoading:true, hasError:null
        });

        render(< MultipleCustomHook />);
        
        expect( screen.getByText('Loading...'));
        expect( screen.getByText('Breaking bad Quoute'));

        // screen.debug();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy();
     });

     test('debe de mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{ author: 'gabriel', quote: 'hola mundo' }], 
                isLoading: false, 
                hasError:null,
        });
        
        render(< MultipleCustomHook />);
        expect( screen.getByText('gabriel')).toBeTruthy();
        expect( screen.getByText('Hola mundo')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();
     
    });

    test(' debe de llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'gabriel', quote: 'hola mundo' }], 
                isLoading: false, 
                hasError:null
        });

        render( < MultipleCustomHook /> );
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click( nextButton );
    
        expect( mockIncrement ).toHaveBeenCalled();
     });

    

 });