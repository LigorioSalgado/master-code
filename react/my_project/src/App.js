import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() { // Mi primer componente - Funcion (Function Component)
  // JSX aca abajito
  return (  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter initCount={1426}/>
      </header>
    </div>
  );
}

export default App;
