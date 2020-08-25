import React from 'react';
import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';


const GifGrid = ({categoria}) => {

   

    // useEffect( ()=>{
    //     getGifs(categoria).then(setImages);
    // },[categoria] );

    const {data:images,loading} = useFetchGifs(categoria);

    return (
        <>
            <h2>{categoria}</h2>
            {loading && <p className='animate__animated animate__shakeX'>Cargando...</p>}
            <div className='card-grid'>
                {images.map( img => 
                <GifGridItem 
                    key={img.id}
                    {...img}
                />
                )}
            </div>
        </>
    );
}

export default GifGrid;
