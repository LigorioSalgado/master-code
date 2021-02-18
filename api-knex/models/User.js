// Trae los datos de la base de datos.

// Conectarme a la base de datos
const knex = require('../config');
const createModelKnex = require('../utils/createModelUtil');

const TABLE = 'users';
const RETURNING_DATA = [
    'id_user',
    'name',
    'last_name',
    'email',
    'phone',
    'active',
    'description',
    'created_at'
  ];
const TABLE_ID = 'id_user';

const UserModel = createModelKnex(knex, TABLE, RETURNING_DATA, TABLE_ID);

module.exports = UserModel;
