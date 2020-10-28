import React, { useState } from 'react';

function FormularioContacto({agregarContacto}) {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmitContacto = (e) => {
        e.preventDefault();
        console.log('Le dieron on submit');
        agregarContacto(name, lastName);
    }

    return (
        <form onSubmit={onSubmitContacto}>
            <input
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                required
                placeholder="Nombre" 
            />
            <input
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                required
                placeholder="Apellidos"
            />

            <button type="submit">Guardar</button>
        </form>
    )
}

export default FormularioContacto;
