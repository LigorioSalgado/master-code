import React from 'react';
import PropTypes from 'prop-types';

// Lista de contactos para funcionar necesita CONTACTOS --> prop lista
function ListaContactos({lista}) {

    const renderConatacts = () => {
        const h1DeContactos = lista.map((contacto, i) => <h1 key={i}>{contacto.name}</h1>)
        // [<h1>Mario</h1>, <h1>Luigi</h1>, <h1>Cesar</h1>]
        return h1DeContactos;
    }

    return (
        <div>
            <h1>Esta es la lista de contactos</h1>
            {renderConatacts()}
        </div>
    )
}

ListaContactos.propTypes = {
    lista: PropTypes.array,
}

export default ListaContactos;
