const connection = require('../database/connection');
const  Joi = require('Joi')

module.exports = {

    async index(request, response) {
       /* const contatos = await connection('tbContato').select('*')
        return response.status(200).json(contatos); */

        response.marko(
            require('../views/contato.marko')
          )
    },

    async create(request, response) {
        const blueprint = Joi.object().keys({
            nomeCompletoContato: Joi.string().required(),
            emailContato: Joi.string().trim().email().required(),
            mensagemContato: Joi.string().required()
         })
         console.log(blueprint)
        console.log(request.body)
        // try {
        //     const { nomeCompletoContato, emailContato, mensagemContato, dataContato } = request.body;
        //     await connection('tbContato').insert({
        //         nomeCompletoContato,
        //         emailContato,
        //         mensagemContato,
        //         dataContato
        //     })
        //     return response.status(200).send({
        //         message: 'Salvo com sucesso!'
        //     })
        // } catch (error) {
        //     console.log(error);
        //     return response.status(500).send({
        //         message: error
        //     })
        // }

    },

    async delete(request, response) {
        try {
            const id = request.params.id;
            await connection('tbContato').where('codContato', id).delete()
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
            const contato = await connection('tbContato').where('codContato', id).update(request.body)
            response.status(200).json(contato)
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: error
            })
        }
    }
}