import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="un-p">
          Aqui esta un parrafo para que pruebes
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Home />
      </header>

    <form onSubmit={(e) => {
      e.preventDefault()
    }}>
      <input type="text" required id="user" />
      <input type="password" required id="password" />
      <button id="onLogin">Login</button>
    </form>

    </div>
  );
}

export default App;
