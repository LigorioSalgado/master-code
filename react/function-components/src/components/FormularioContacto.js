import React from 'react';

function FormularioContacto () {
    return (
        <form>
            <input required placeholder="Nombre" />
            <input required placeholder="Apellidos" />
            <button type="submit">Guardar</button>
        </form>
    )
}

export default FormularioContacto;
