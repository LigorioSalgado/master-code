import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component{

    state = {
        search: "",
        results: []
    }

    sendSearch = () => {
        // aca vamos a hacer la llamada a la api
        axios.get(`https://api.giphy.com/v1/gifs/search?limit=10&q=${this.state.search}&api_key=AiapZfxhKQG4fDNa89l7dzvE0tTE3Ou9`)
            .then((results) => {
                console.log(results.data)
            })
    }

    render(){
        return(
            <div className="search-bar">
                <input
                    placeholder="Buscar..."
                    name="search"
                    className="search-input" 
                    onChange={(event) => {
                        // onChange se ejecuta cada vez que el usuario modifica algo en el input
                        // onChange recibe un callback con el evento y asi sber el valor del input 
                        // cada vez que el usuario teclea algo en el input lo guardamos en el estado
                        this.setState({search: event.target.value})
                    }}
                />
                <button 
                    className="search-button"
                    onClick={this.sendSearch}
                >Buscar</button>
            </div>

        )
    }

}

export default SearchBar;