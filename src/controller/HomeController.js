const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        response.marko(
            require('../views/home.marko')
        )
    }
}