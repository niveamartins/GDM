
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table){
        table.increments('id').primary();
        table.string('name', 150).notNullable();
        table.string('email', 50).notNullable();
        table.string('telephone', 15).notNullable();
        table.string('password', 16).notNullable();
        table.boolean('isTechnician').notNullable();


    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
