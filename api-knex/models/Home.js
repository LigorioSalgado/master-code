// Trae los datos de la base de datos.

// Conectarme a la base de datos
const knex = require('../config');
const createModelKnex = require('../utils/createModelUtil');

const TABLE = 'homes';
const RETURNING_DATA = ['title', 'house_id', 'address', 'guests', 'description', 'created_at', 'active'];
const TABLE_ID = 'house_id';

const HomeModel = createModelKnex(knex, TABLE, RETURNING_DATA, TABLE_ID);

module.exports = HomeModel;
