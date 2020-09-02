const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const admin = await connection('tbReserva').select('*')
            // return response.status(200).json(admin);

        response.marko(
            require('../views/admin.marko', {
                admin: admin
            })
        )
    },
}