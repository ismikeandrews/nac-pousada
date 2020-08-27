
exports.up = function(knex) {
    return knex.schema.createTable('tbReserva', function(table){
        table.increments('codReserva').primary();
        table.timestamp('dataEntrada').notNullable;
        table.timestamp('dataSaida',).notNullable;
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbReserva');
};
