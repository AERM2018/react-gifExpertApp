import React, {useState} from 'react';
import AddCategoria from './components/AddCategoria';
import GifGrid from './components/GifGrid';

const GifExpertApp = () =>{

    const [categorias, setCategorias] = useState(['Dragon ball']);

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategoria setCategorias = { setCategorias }/>
            <hr/>

            <ol>
                {categorias.map( (cat) =>
                    <GifGrid 
                        key={cat}
                        categoria={cat}
                    />
                )} 

            </ol>            
        </>
    )
}

export default GifExpertApp