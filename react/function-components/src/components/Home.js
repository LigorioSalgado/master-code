import React from 'react';
import Counter from './Counter';
import ListaContactos from './ListaContactos';
import FormularioContacto from './FormularioContacto';
function Home({saludo}) {
    return (
        <div>
            <h1>Este es el Home en funcion</h1>
            <p>{saludo}</p>
            <Counter />
            <FormularioContacto />
            <ListaContactos />
        </div>
    );
}

export default Home;
