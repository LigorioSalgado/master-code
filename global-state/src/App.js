import React from 'react';
import SongDetail from './SongDetails';
import SongList from './SongList';

function App() {
  return (
    <div className="App">
      
      <div className="izquierdo">
        <h2>Lado izquierdo</h2>
        <SongList />
      </div>

      <div className="derecho">
        <h2>Lado derecho</h2>
        <SongDetail />
      </div>

    </div>
  );
}

export default App;
