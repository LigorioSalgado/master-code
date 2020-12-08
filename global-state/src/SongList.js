import React from 'react';

function SongList({listaDeCanciones}) {

    return (
        <section>
            {
                listaDeCanciones.length === 0 
                    ? <h1>Cargando...</h1> 
                    : listaDeCanciones.map((song) => (
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
