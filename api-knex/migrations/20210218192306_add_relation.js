
exports.up = function(knex) {
    return knex.schema.table('homes', (table) => {
        // Aqui puedo manipular la tabla homes
        
        // Quiero hacer un rename de una columa
        table.renameColumn('description', 'detail');

        //Agregar una columna a mi table y que sea foreanea.
        // references: Indicar a que tabla y que columna tiene que hacer referencia
        table.integer('fk_user').unsigned().references('users.id_user')
    })
};

exports.down = function(knex) {
  
};