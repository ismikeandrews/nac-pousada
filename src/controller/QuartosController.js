const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        // const quartos = await connection('tbQuartos').select('*')

        // return response.json(quartos)
        response.marko(
            require('../views/quartos.marko')
        )
    }
}