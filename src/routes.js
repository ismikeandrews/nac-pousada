const express = require('express');
const routes = express.Router();

const HomeController = require('./controller/HomeController')

routes.get('/', HomeController.index)

module.exports = routes;