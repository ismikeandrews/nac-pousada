const express = require('express');
const routes = express.Router();

const HomeController = require('./controller/HomeController')
const QuartoController = require('./controller/QuartoController')
const ReservaController = require('./controller/ReservaController')

//GET
routes.get('/', HomeController.index)
routes.get('/quartos', QuartoController.index)
routes.get('/reservas', ReservaController.index)
//DELETE
routes.delete('/delete/quarto', QuartoController.delete)
routes.delete('/delete/reserva', ReservaController.delete)
//POST
routes.post('/quarto', QuartoController.create)
routes.post('/reserva', ReservaController.create)
//PUT
routes.put('/update/quarto', QuartoController.update)
routes.put('/update/reserva', ReservaController.update)


module.exports = routes;