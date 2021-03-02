
exports.up = function(knex) {
  return knex.schema.table('users',(table) =>{
      table.string('password').nullable()
      table.string('rol').nullable()
  })
};

exports.down = function(knex) {
  
};
