

import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';


describe('Pruebas en el useForm', () => {  

    const initialForm = {
        name:'gabriel',
        email: 'gabrielmancilladucuara@gmail.com'
    }
    
    test('debe de regresar los valores por defecto ', () => {  
        
    const { result } = renderHook (() => useForm( initialForm ));
    
    expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm, 
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
    })
 
    // console.log(result.current)
    });

    test('debe cambiar el nombre del formulario ', () => {  
        
        const newValue = 'Gabriel';
        const { result } = renderHook (() => useForm( initialForm ));
        const { onInputChange } = result.current;
        
        act(() => {
            onInputChange({target: {name: 'name', value: newValue}})
        });

        expect(result.current.name ).toBe(newValue);
        expect(result.current.formState.name).toBe( newValue );

        });

    test('debe de realizar el test del formulario', () => {  
        
        const newValue = 'gabriel';
        const { result } = renderHook (() => useForm( initialForm ));
        const { onInputChange , onResetForm } = result.current;
            
        act(() => {
            onInputChange({target: {name: 'name', value: newValue}});
            onResetForm();
        });
    
        expect(result.current.name ).toBe( initialForm.name );
        expect(result.current.formState.name).toBe( initialForm.name );
        }); 
});