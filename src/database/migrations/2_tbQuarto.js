
exports.up = function(knex) {
    return knex.schema.createTable('tbQuarto', function(table){
        table.increments('codQuarto').primary();
        table.text('imagemQuarto');
        table.string('nomeQuarto');

        table.integer('codTipoQuarto').unsigned();
        table.foreign('codTipoQuarto').references('codTipoQuarto').inTable('tbTipoQuarto');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbQuarto');
};
