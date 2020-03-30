//npx knex migrate:make create_machine
exports.up = function(knex) {
    //criaremos a tabela com o nome machine  
    return knex.schema.createTable('machine', function(table){
      table.increments('id').primary();
      //increments é um campo em que sempre que for criado um
      //novo item, esse número se atualiza. além disso, primary
      //quer dizer que é um valor único para cada máquina

      table.timestamp('updated_to', { useTz: true });
      table.string('name', 100).notNullable();
      //aqui estamos dizendo que esse campo é uma string, com nome
      //de name e tem o limite de 100 caracteres. Esse campo
      //não pode ser nulo
      
      table.integer('lab_id').notNullable();
      table.boolean('isWorking').notNullable();
      table.text('extras');
  
      table.foreign("lab_id").references("id").inTable("lab");  
  
    });
  };
  
  exports.down = function(knex) {
    //aqui, se der errado, indicaremos o que deve ser feito
    //nesse caso, indicamos que a tabela deve ser deletada.  
    return knex.schema.dropTable('machine');
  };
  