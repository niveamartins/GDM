//npx knex migrate:make create_lab
exports.up = function(knex) {
    return knex.schema.createTable('lab', function (table){
        table.increments('id').primary();
        table.string('name', 150).notNullable();
        table.text('location').notNullable();
        //campo do tipo texto.
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('lab');
};
