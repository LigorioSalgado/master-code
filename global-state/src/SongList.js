import React, { useEffect, useState } from 'react';
import canciones from './listaCanciones.json';

function SongList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setList(canciones);
        }, 2000)
    }, [])

    return (
        <section>
            {
                list.length === 0 
                    ? <h1>Cargando...</h1> 
                    : <h1>Lista con datos</h1>
            }
        </section>
    )
}

export default SongList;