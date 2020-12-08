import React, { useState, useEffect } from 'react';
import canciones from './listaCanciones.json';

// Creación del contexto vacio
const SongContext = React.createContext();

// Creación del provedor del contexto
function SongProvider(props) {

    const [list, setList] = useState([]);
    const [selectedSong, setSelectedSong] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setList(canciones);
        }, 2000)
    }, [])
    
    const value = {
        list,
        selectedSong,
        setSelectedSong
    }

    return (
        // value es un objeto que indica que datos son globales.
        <SongContext.Provider value={value} {...props} />
    )
}

// Consumidor del contexto
const useSongContext = () => {
    const context = React.useContext(SongContext);
    return context;
}

export {
    SongProvider,
    useSongContext,
}
