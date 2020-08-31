
exports.up = function(knex) {
    return knex.schema.createTable('tbTipoQuarto', function(table){
        table.increments('codTipoQuarto').primary();
        table.string('nomeTipoQuarto').notNullable;
        table.text('descricaoTipoQuarto').notNullable;
        table.text('imagemTipoQuarto');
        table.float('valorDiariaTipoQuarto').notNullable;
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbTipoQuarto');
};
