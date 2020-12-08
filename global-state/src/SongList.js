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
                    : list.map((song) => (
                        <div className="row-song">
                            <h4>{song.title}</h4>
                            <h5>{song.artist}</h5>
                        </div>
                    ))
            }
        </section>
    )
}

export default SongList;