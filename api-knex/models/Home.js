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
    // select title, house_id from 'homes';
    return knex
        .select(['title', 'house_id', 'address', 'guests', 'description', 'created_at'])
        .from('homes')

}

const findOne = (houseId) => {
    // select tile, house_id, ..., from 'homes' where house_id=id
    return knex
        .select(['title', 'house_id', 'address', 'guests', 'description', 'created_at'])
        .from('homes')
        .where({ house_id: houseId });
}

module.exports = {
    create,
    findAll,
    findOne,
};
