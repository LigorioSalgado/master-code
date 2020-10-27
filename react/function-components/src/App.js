import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home saludo="Hola por props dos" />
      </header>
    </div>
  );
}

export default App;
