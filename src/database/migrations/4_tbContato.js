
exports.up = function(knex) {
    return knex.schema.createTable('tbContato', function(table){
        table.increments('codContato').primary();
        table.string('nomeCompletoContato').notNullable;
        table.string('emailContato').notNullabe;
        table.text('mensagemContato').notNullabe;
        table.timestamp('dataContato').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbContato');
};
