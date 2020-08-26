
exports.up = function(knex) {
    return knex.schema.createTable('tbQuartos', function(table){
        table.increments('codQuarto').primary();
        table.boolean('status').notNullable();

        //Adicionar uma foreign key na tabela
        // table.integer('foreignkey').unsigned();
        // table.foreign('foreignkey').references('primarykey').inTable('tbExemplo');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbQuartos');
};
