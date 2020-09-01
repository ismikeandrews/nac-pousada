const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        try {
            const results = await connection('tbTipoQuarto').select('*')
            response.marko(
                require('../views/quartos.marko'), {
                    tipos: results
                }
            )
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: error
            })
        }
    },

    async create(request, response) {
        try {
            const { nomeTipoQuarto, descricaoTipoQuarto, valorDiariaTipoQuarto } = request.body;
            await connection('tbTipoQuarto').insert({
                nomeTipoQuarto,
                descricaoTipoQuarto,
                valorDiariaTipoQuarto,
            })
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
            await connection('tbTipoQuarto').where('codTipoQuarto', id).delete()
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
            const tipoQuarto = await connection('tbTipoQuarto').where('codTipoQuarto', id).update(request.body)
            response.status(200).json(tipoQuarto)
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: error
            })
        }
    }
}