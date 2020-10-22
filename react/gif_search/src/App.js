import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';
import axios from 'axios';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      results: [],
    }
  }

  


  sendSearch = (search) => {
    // aca vamos a hacer la llamada a la api
    axios.get(`https://api.giphy.com/v1/gifs/search?limit=10&q=${search}&api_key=AiapZfxhKQG4fDNa89l7dzvE0tTE3Ou9`)
        .then((response) => {
          console.log(response.data.data)
          this.setState({ results: response.data.data })
    })
}
  
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
       <SearchBar  emitSearch={this.sendSearch}  />
        <div className="grid-cards">
          {
            this.state.results.map( (gif) =>(<ImageCard url={gif.images.fixed_width.url} />))
          }
        </div>
      </div>
    );
  }

}

export default App;
