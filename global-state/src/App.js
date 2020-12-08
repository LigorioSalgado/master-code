import React, { useState, useEffect } from 'react';
import SongDetail from './SongDetails';
import SongList from './SongList';
import canciones from './listaCanciones.json';

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
      setTimeout(() => {
          setList(canciones);
      }, 2000)
  }, [])


  return (
    <div className="App">
      
      <div className="izquierdo">
        <h2>Lado izquierdo</h2>
        <SongList listaDeCanciones={list} />
      </div>

      <div className="derecho">
        <h2>Lado derecho</h2>
        <SongDetail />
      </div>

    </div>
  );
}

export default App;
