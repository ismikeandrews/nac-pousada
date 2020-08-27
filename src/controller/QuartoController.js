const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const quartos = await connection('tbQuarto').select('*')
        return response.status(200).json(quartos);
    },

    async create(request, response) {
        const {
            imagemQuarto,
            codTipoQuarto
        } = request.body;
        try {
            await connection('tbQuarto').insert({
                imagemQuarto,
                codTipoQuarto
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
        const id = request.body.codQuarto;

        try {
            await connection('tbQuarto').where('codQuarto', id).delete()
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
            codQuarto,
            imagemQuarto,
            codTipoQuarto
        } = request.body;

        try {
            const quarto = await connection('tbQuarto').where('codQuarto', codQuarto).update(imagemQuarto, codTipoQuarto)
            response.status(200).json(quarto)
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: 'ERROR: ' + error
            })
        }
    }
}