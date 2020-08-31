exports.seed = function(knex) {
    return knex('tbQuarto').del()
        .then(function () {
            return knex('tbQuarto').insert([
                {
                    imagemQuarto: 'vip1.jpeg',
                    codTipoQuarto: 1,
                    nomeQuarto: 'Primavera'
                },
                {
                    imagemQuarto: 'vip2.jpg',
                    codTipoQuarto: 1,
                    nomeQuarto: 'Verão'
                },
                {
                    imagemQuarto: 'vip3.jpg',
                    codTipoQuarto: 1,
                    nomeQuarto: 'De frente pro mar'
                },
                {
                    imagemQuarto: 'vip4.jpg',
                    codTipoQuarto: 1,
                    nomeQuarto: 'Lua de mel'
                },
                {
                    imagemQuarto: 'apto1.jpg',
                    codTipoQuarto: 2,
                    nomeQuarto: 'Luxuoso duplo'
                },
                {
                    imagemQuarto: 'apto2.jpg',
                    codTipoQuarto: 2,
                    nomeQuarto: 'Com deck'
                },
                {
                    imagemQuarto: 'apto3.jpg',
                    codTipoQuarto: 2,
                    nomeQuarto: 'Maresia'
                },
                {
                    imagemQuarto: 'apto4.jpg',
                    codTipoQuarto: 2,
                    nomeQuarto: 'Luxuoso individual'
                },
            ])
        })
}