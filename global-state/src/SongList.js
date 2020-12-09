import React from 'react';
import { useSongContext } from './SongContext';

function SongList() {
    const context = useSongContext();
    console.log(context);
    return (
        <section>
            {
                context.list.length === 0 
                    ? <h1>Cargando...</h1> 
                    : context.list.map((song) => (
                        <div key={song.title} className="row-song" onClick={() => {
                           context.setSelectedSong(song);
                        }}>
                            <h4>{song.title}</h4>
                            <h5>{song.artist}</h5>
                        </div>
                    ))
            }
        </section>
    )
}

export default SongList;
