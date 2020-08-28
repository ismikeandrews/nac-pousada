const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const tipoQuarto = await connection('tbTipoQuarto').select('*')
        return response.status(200).json(tipoQuarto);
    },

    async create(request, response) {
        const {
            nomeTipoQuarto,
            descricaoTipoQuarto,
            valorDiariaTipoQuarto
        } = request.body;
        try {
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
        const id = request.params.id;

        try {
            await connection('tbTipoQuarto').where('codTipoQuarto', id).delete()
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
            codTipoQuarto,
            nomeTipoQuarto,
            descricaoTipoQuarto,
            valorDiariaTipoQuarto
        } = request.body;

        try {
            const tipoQuarto = await connection('tbTipoQuarto').where('codTipoQuarto', codTipoQuarto).update(nomeTipoQuarto, descricaoTipoQuarto, valorDiariaTipoQuarto)
            response.status(200).json(tipoQuarto)
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: error
            })
        }
    }
}