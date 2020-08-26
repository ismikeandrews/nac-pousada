const express = require('express');
const routes = express.Router();

const QuartosController = require('./controller/QuartosController');
const HomeController = require('./controller/HomeController')

routes.get('/', HomeController.index)
routes.get('/quartos', QuartosController.index)

module.exports = routes;