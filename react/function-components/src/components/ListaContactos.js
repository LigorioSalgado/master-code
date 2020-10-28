import React from 'react';

// Lista de contactos para funcionar necesita CONTACTOS --> prop lista
function ListaContactos({lista}) {

    const renderConatacts = () => {
        const h1DeContactos = lista.map((contacto) => <h1>{contacto.name}</h1>)
        // [<h1>Mario</h1>, <h1>Luigi</h1>]
        return h1DeContactos;
    }

    return (
        <div>
            <h1>Esta es la lista de contactos</h1>
            {renderConatacts()}
        </div>
    )
}

export default ListaContactos;
