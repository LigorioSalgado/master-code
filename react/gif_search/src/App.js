import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';

class App extends React.Component {
  
  componentWillMount(){ // este es un metodo unsafe y ya no se ocupa
    console.log('1. Antes de que se ejecute render')
  }

  componentDidMount(){
    console.log(' 3. Despues de Render')
  }

  render(){
    console.log('2. En render')
    return (
      <div className="App">
       <SearchBar />
        <div className="grid-cards">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    );
  }

}

export default App;
