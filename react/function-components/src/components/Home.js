import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Counter from './Counter';
import ListaContactos from './ListaContactos';
import FormularioContacto from './FormularioContacto';

function Home({saludo}) {
    const [contactos, setContactos] = useState([]);

    const addContacto = (nombre, lastName) => {
        console.log('El contacto que vamos a agregar es: ' + nombre);
        
        // 1.- Crear el obejto contacto en
        const objContacto = {
            id: contactos.length + 1,
            name: nombre,
            lastName: lastName,
        }
        // 2.- Pushear el objeto contacto al estado (modificar el estado)
        setContactos([...contactos, objContacto]);
    }

    // Funciona como didMount
    // Pide dos parametros 1-callback, 2-array
    useEffect(() => {
        // Adentro del callback es didMount
        console.log('Se ejecuto useEffect');
        
        // Simula una petición a aun API que tarda 3 seg en contestar
        setTimeout(() => {
            setContactos([{id: 1, name: 'Erwin'}, {id: 2, name: 'Lurwin'}, {id: 2, name: 'Edwino'}])
        }, 7000)

    }, []);

    return (
        <div>
            <h1>Este es el Home en funcion</h1>
            <p>{saludo}</p>
            {/* <Counter /> */}
            <FormularioContacto agregarContacto={addContacto} />
            {contactos.length === 0 ? <h1>Cargando contactos...</h1> : <ListaContactos lista={contactos} />}
            <Link to="/about">Vamonos al about</Link>
        </div>
    );
}

Home.propTypes = {
    saludo: PropTypes.string
}

export default Home;
