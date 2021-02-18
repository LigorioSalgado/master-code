
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('users', (table) => {
      table.increments('id_user').primary();
      table.string('name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.boolean('active').notNullable().defaultTo(true)
      table.text('description');
      table.timestamp('created_at').defaultTo(knex.fn.now())
      
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('users')
  };
  