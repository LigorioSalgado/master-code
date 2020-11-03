import React from 'react';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            perfil: null
        }
    }

    componentDidMount(){
        // Se ejecuta cuando termina de renderear
        // Deben de ir las peticiones a las APIS que necesitas que se carguen automaticamente
        console.log('componentDidMount');
        // El setTimeOut simula una petición que tarda 5 seg
        setTimeout(() => {
            this.setState({
                perfil: {
                    name: 'Mario Bros'
                }
            });
        }, 5000);
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillMount() {
        // Will mount ahora no se ocupa porque puede producir un cuello de botella
        // Antes de que exista algo en mi pagina
        console.log('componentWillMount');
    }

    render() {
        console.log('Render');
        return (
            <div>
                <h1>El home</h1>
                {this.state.perfil === null ? <h1>Cargando...</h1> : <h1>Ya existe un perfil</h1>}
            </div>
        )
    }

}

export default Home;
