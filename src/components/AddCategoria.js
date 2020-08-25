import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategoria = ({setCategorias}) => {

    const [inputValue, setinputValue] = useState("");

    const handleInputChange = (e) =>{
        setinputValue( e.target.value );
      
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategorias( cat => [inputValue,...cat] )
            setinputValue('')
        }

    }

    return (
        
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
        
    );
}

AddCategoria.propTypes = {
    setCategorias : PropTypes.func.isRequired
}

export default AddCategoria;
