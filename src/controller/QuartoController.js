const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        try {
            const tipoQuarto = request.params.tipoQuarto;
            const results    = await connection('tbQuarto')
                .join('tbTipoQuarto', 'tbQuarto.codTipoQuarto', '=', 'tbTipoQuarto.codTipoQuarto')
                .where('nomeTipoQuarto', tipoQuarto)
                .select('*')

            response.marko(
                require('../views/quarto.marko'), {
                    quartos    : results,
                    tipoQuarto : {
                        nomeTipoQuarto        : results[0].nomeTipoQuarto,
                        descricaoTipoQuarto   : results[0].descricaoTipoQuarto,
                        valorDiariaTipoQuarto : results[0].valorDiariaTipoQuarto
                    }
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
            const { imagemQuarto, codTipoQuarto } = request.body;
            await connection('tbQuarto').insert({ imagemQuarto, codTipoQuarto})
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
            await connection('tbQuarto').where('codQuarto', id).delete()
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
            const id = request.params.id;
            const quarto = await connection('tbQuarto').where('codQuarto', id).update(request.body)
            response.status(200).json(quarto)
        } catch (error) {
            console.log(error);
            return response.status(500).send({
                message: error
            })
        }
    }
}