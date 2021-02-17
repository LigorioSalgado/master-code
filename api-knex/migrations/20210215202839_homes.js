// Aqui voy a definir que atributos tiene mi tabla HOMES
exports.up = function(knex) {
    //createTableIfNotExists parametros: como se llama la tabla, callback
    return knex.schema.createTableIfNotExists('homes', (table) => {
        // Definición de mi tabla 'HOMES'
        table.increments('house_id').primary();
        // table.tipo_de_dato('nombre de la columa').atributos_de_la_columna
        table.string('title').notNullable();
        table.integer('guests').notNullable();
        table.text('address').notNullable();
        table.text('description');
        table.boolean('active').notNullable().defaultTo(true);
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('homes');
};
