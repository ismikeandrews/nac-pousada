exports.up = function(knex) {
    return knex.schema.createTable('tbReserva', function(table) {
        table.increments('codReserva').primary();
        table.timestamp('dataEntrada').notNullable().defaultTo(knex.fn.now());
        table.timestamp('dataSaida').notNullable().defaultTo(knex.fn.now());
        table.integer('valorReserva');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbReserva');
};