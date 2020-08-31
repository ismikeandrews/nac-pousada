exports.seed = function(knex) {
    return knex('tbTipoQuarto').del()
        .then(function () {
            return knex('tbTipoQuarto').insert([
                {
                    nomeTipoQuarto: 'vip',
                    descricaoTipoQuarto: 'Todos os quartos VIPs contam banheiro privativo' +
                        'com secador de cabelo e produtos de banho. Todos com uma vista linda.' +
                        'Já incluso serviços de café de manhã.',
                    valorDiariaTipoQuarto: 150,
                    imagemTipoQuarto: 'vip.jpg'
                },
                {
                    nomeTipoQuarto: 'apartamento',
                    descricaoTipoQuarto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                        'Vestibulum luctus augue eu leo facilisis, ullamcorper efficitur velit auctor.' +
                        'Etiam placerat rhoncus ante, nec dapibus quam. In hac habitasse platea dictumst. ' +
                        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos',
                    valorDiariaTipoQuarto: 200,
                    imagemTipoQuarto: 'apto.jpg'
                }
            ])
        })
}