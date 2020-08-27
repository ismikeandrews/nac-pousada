const express = require('express');
const routes = express.Router();

const HomeController = require('./controller/HomeController')
const QuartoController = require('./controller/QuartoController')

routes.get('/', HomeController.index)
routes.get('/quartos', QuartoController.index)
routes.delete('/delete/quarto', QuartoController.delete)
routes.post('/quarto', QuartoController.create)
routes.put('/update/quarto', QuartoController.update)

module.exports = routes;