const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const reservas = await connection('tbReserva').select('*')
        response.marko(
            require('../views/admin.marko'), {
                reservas: reservas
            })
    },
}