import React, { useState } from 'react';

function ListaContactos() {
    const [contactos, setContactos] = useState([
        {id: 1, name: 'Mario', lastName: 'Bros'},
        {id: 2, name: 'Luigi', lastName: 'Bros'},
    ]);    

    const renderConatacts = () => {
        const h1DeContactos = contactos.map((contacto) => <h1>{contacto.name}</h1>)
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
