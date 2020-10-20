// Reglas de React 
// 1. El archivo de mi componente tiene que ir Capitalizado
// 2. SIEMPRE mandar a importar la dependencia de React
// 3. La clase/funcion debe llamarse igual que el archivo.
import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    //state = {}  solo si no tengo constructor
    
    constructor(props){
        super(props);
        this.state = {
            count: props.initCount //Count es el valor inicial de mi contador
        }
        //El state se va encargar de modificar el dom por mi
        //React detecta cambios en el state y los pone en la ui
    }

    render(){ //Este metodo es heredaado de la clase component
        //Render sirve para mostar el html que va a llevar el componente
        // jsx no reconoce class como un atributo de html este lo cambia a 'className'
        return (
            <div className="counter-main">
                <h5>{this.state.count}</h5>{/*  la llave en jsx representa codigo de JS */}
                <div className="counter-buttons">
                     {/*  this.setState es el unico que puede cambiar el estado */}
                    <button
                        onClick={() => this.setState({count: this.state.count + 1 })} 
                    >
                        Agregar
                    </button>
                    <button
                     onClick={() => this.setState({count: this.state.count - 1 })} 
                    >Disminuir</button>
                </div>
            </div>
        )

    }
    
}

export default Counter;