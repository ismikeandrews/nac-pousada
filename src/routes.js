const express = require('express');
const routes = express.Router();

const AdminController = require('./controller/AdminController');
const HomeController = require('./controller/HomeController')
const QuartoController = require('./controller/QuartoController')
const ReservaController = require('./controller/ReservaController');
const ContatoController = require('./controller/ContatoController');
const TipoQuartoController = require('./controller/TipoQuartoController');



//GET
routes.get('/', HomeController.index)
routes.get('/admin', AdminController.index)
routes.get('/quartos', TipoQuartoController.index)
routes.get('/quartos/:tipoQuarto', QuartoController.index)
routes.get('/quarto/all', QuartoController.getAll)
routes.get('/reserva/:id', ReservaController.newReserva)
routes.get('/contatos', ContatoController.index)
routes.get('/reserva/delete/:id', ReservaController.delete)

//DELETE
routes.delete('/quartos/delete/:id', QuartoController.delete)
routes.delete('/contato/delete/:id', ContatoController.delete)

//POST
routes.post('/quartos/create', QuartoController.create)
routes.post('/reserva/create', ReservaController.create)
routes.post('/contato/create',  ContatoController.create)

//PUT
routes.put('/quarto/update/:id', QuartoController.update)
routes.put('/reserva/update/:id', ReservaController.update)
routes.put('/contato/update/:id', ContatoController.update)

module.exports = routes;