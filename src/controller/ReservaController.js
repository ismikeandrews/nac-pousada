const connection = require('../database/connection');


module.exports = {

    async index(request, response) {
        const reservas = await connection('tbReserva').select('*')
            // return response.status(200).json(reservas);

        response.marko(
            require('../views/nova-reserva.marko', {
                reservas: reservas
            })
        )
    },

    async newReserva(request, response) {
        try {
            const id = request.params.id
            const quarto = await connection('tbQuarto').select('*').where('codQuarto', id)
                .join('tbTipoQuarto', 'tbQuarto.codTipoQuarto', '=', 'tbTipoQuarto.codTipoQuarto').first()
            console.log(quarto)
            response.marko(
                require('../views/nova-reserva.marko'), {
                    nomeQuarto: quarto.nomeQuarto,
                    imagemQuarto: quarto.imagemQuarto,
                    codTipoQuarto: quarto.codTipoQuarto,
                    nomeTipoQuarto: quarto.nomeTipoQuarto,
                    valorDiariaTipoQuarto: quarto.valorDiariaTipoQuarto
                })
        } catch (e) {
            console.error(e)
            return response.status(500).send({
                message: e
            })
        }
    },

    async create(request, response) {
        try {
            const { nomeCompleto, dataEntrada, dataSaida, valorReserva } = request.body;
            await connection('tbReserva').insert({ nomeCompleto, dataEntrada, dataSaida, valorReserva })
            return response.status(200).send({
                message: 'Salvo com sucesso!'
            })
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: error
            })
        }

    },

    async delete(request, response) {
        try {
            const id = request.params.id;
            await connection('tbReserva').where('codReserva', id).delete()
            response.status(200).send({
                message: 'Excluido com sucesso.'
            })
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: error
            })
        }
    },

    async update(request, response) {
        try {
            const id = request.params.id
            const reserva = await connection('tbReserva').where('codReserva', id).update(request.body)
            response.status(200).json(reserva)
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: error
            })
        }
    }
}