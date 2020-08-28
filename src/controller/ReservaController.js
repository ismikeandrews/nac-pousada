const connection = require('../database/connection');


module.exports = {

    async index(request, response) {
        const reservas = await connection('tbReserva').select('*')
        return response.status(200).json(reservas);
    },

    async create(request, response) {
        const {
            dataEntrada,
            dataSaida
        } = request.body;
        try {
            await connection('tbReserva').insert({
                dataEntrada,
                dataSaida
            })
            return response.status(200).send({
                message: 'Salvo com sucesso!'
            })
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: 'ERROR: ' + error
            })
        }

    },

    async delete(request, response) {
        const id = request.params.id;
        try {
            await connection('tbReserva').where('codReserva', id).delete()
            response.status(200).send({
                message: 'Excluido com sucesso.'
            })
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: 'ERROR: ' + error
            })
        }
    },

    async update(request, response) {
        const {
            codReserva,
            dataEntrada,
            dataSaida
        } = request.body;

        try {
            const reserva = await connection('tbReserva').where('codReserva', codReserva).update(dataEntrada, dataSaida)
            response.status(200).json(reserva)
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: error
            })
        }
    }
}