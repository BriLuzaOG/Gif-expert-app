import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmitForm = (evento) => {
    evento.preventDefault();

    if ( inputValue.trim().length <= 1 ) return;

    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmitForm }>
      <input 
        type="text"
        placeholder="Buscar Gif"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
