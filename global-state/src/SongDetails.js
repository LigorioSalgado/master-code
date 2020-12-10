import React from 'react';
import { useSongContext } from './SongContext';

function SongDetail() {
    // Consumo el contexto (estado global)
    const context = useSongContext();

    const clickEnBorrar = () => {
        context.deleteSong(context.selectedSong.title)
    }

    return (
        <div>
            {
                context.selectedSong.title 
                    ? (<div>
                        <h1>{context.selectedSong.title}</h1>
                        <button onClick={clickEnBorrar}>Borrar</button>
                        <h1>{process.env.REACT_APP_PRUEBA}</h1>
                        </div>)
                    : <h1>Selecciona una canción</h1>}
        </div>
    )
}

export default SongDetail;
