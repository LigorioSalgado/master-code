import React from 'react';

class SearchBar extends React.Component{

    state = {
        search: ""    
    }

    // this.state para manejar el estado interno del componente
    // this.props para obtener las propiedades que nos pasa el componente padre

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
                    //this.sendSearch() asi lo ejecutaria en el padre
                    onClick={() => this.props.emitSearch(this.state.search)}
                >Buscar</button>
            </div>

        )
    }

}

export default SearchBar;