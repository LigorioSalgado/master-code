import React from 'react';
import { SongProvider } from './SongContext';
import SongDetail from './SongDetails';
import SongList from './SongList';

function App() {

  return (
    <div className="App">
      <SongProvider>
        <div className="izquierdo">
          <h2>Lado izquierdo</h2>
          <SongList />
        </div>

        <div className="derecho">
          <h2>Lado derecho</h2>
          <SongDetail />
        </div>
      </SongProvider>
    </div>
  );
}

export default App;
