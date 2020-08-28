const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const contatos = await connection('tbContato').select('*')
        return response.status(200).json(contatos);
    },

    async create(request, response) {
        const {
            nomeCompletoContato,
            emailContato,
            mensagemContato,
            dataContato
        } = request.body;
        try {
            await connection('tbContato').insert({
                nomeCompletoContato,
                emailContato,
                mensagemContato,
                dataContato
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
            await connection('tbContato').where('codContato', id).delete()
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
            codContato,
            nomeCompletoContato,
            emailContato,
            mensagemContato,
            dataContato
        } = request.body;

        try {
            const contato = await connection('tbContato').where('codContato', codContato).update(nomeCompletoContato, emailContato, mensagemContato, dataContato)
            response.status(200).json(contato)
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: error
            })
        }
    }
}