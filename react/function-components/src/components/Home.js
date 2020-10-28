import React, {useState} from 'react';
import Counter from './Counter';
import ListaContactos from './ListaContactos';
import FormularioContacto from './FormularioContacto';
function Home({saludo}) {
    
    const [contactos, setContactos] = useState([
        {id: 1, name: 'Mario', lastName: 'Bros'},
        {id: 2, name: 'Luigi', lastName: 'Bros'},
    ]);

    const addContacto = (nombre, lastName) => {
        console.log('El contacto que vamos a agregar es: ' + nombre);
    }

    return (
        <div>
            <h1>Este es el Home en funcion</h1>
            <p>{saludo}</p>
            {/* <Counter /> */}
            <FormularioContacto agregarContacto={addContacto} />
            <ListaContactos lista={contactos} />
        </div>
    );
}

export default Home;
