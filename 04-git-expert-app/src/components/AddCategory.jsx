import { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [InputValue, setInputValue] = useState('');

    const ChangeInput = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = ( event ) => {
        // console.log('Hola mundo desde onSubmit')
        event.preventDefault();
        if(InputValue.trim().length <= 1) return;

        // setCategories(categories => [InputValue, ...categories]);
        setInputValue('');
        onNewCategory( InputValue.trim() );        
    }

  return (
    //Establecer valor de formulario y luego realizar el testeo con JEST
    <form onSubmit={ onSubmit } aria-label='form'>
        <input 
            type="text"
            placeholder='Buscar gifs'
            value={ InputValue }
            onChange={ChangeInput }
        />
    </form>
  );
};

AddCategory.PropTypes = {
    onNewCategory: PropTypes.func.isRequired,
}