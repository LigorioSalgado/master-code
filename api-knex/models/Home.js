// Trae los datos de la base de datos.

// Conectarme a la base de datos
const knex = require('../config');

// select title, house_id from 'homes';

const create = (bodyHome) => {
    // Crear un registro en la tabla HOMES.
    return knex
        .insert(bodyHome)
        .returning(['title', 'house_id', 'address', 'guests', 'description', 'created_at'])
        .into('homes')
};


const findAll = () => {
    // Obtiene todos los registros de la tabla HOMES
}

module.exports = {
    create,
    findAll,
};
